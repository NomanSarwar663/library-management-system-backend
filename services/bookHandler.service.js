const { createResponse, formatResponse } = require("../helpers/utility");
const validate = require("../helpers/validationSchema");
const { BaseError } = require("../helpers/ErrorHandling");
const Book = require("../model/book");
const BookIssuedHistory = require("../model/bookIssuedHistory");

async function getIssuedDetails(_id) {
  const book = await Book.findOne({ _id });

  if (book) {
    if (
      book.issuedDetails &&
      book.issuedDetails.issuer
    ) {
      const checkedOutDetails = {
        issuer: book.issuedDetails.issuer,
        requiredReturnDay: book.issuedDetails.returnDate,
        penalty: 0,
      };
      return formatResponse(200, "Success", "Get Isssued Details", {
        checkedOutDetails,
      });
    }
    return formatResponse(200, "Error", "This book is not issued");
  }

  throw new BaseError("No Book found", 404);
}

async function checkIn(_id) {
  const book = await Book.findOne({ _id });

  if (book) {
    if (
      book.issuedDetails &&
      book.issuedDetails.issuer
    ) {
      const bookHistory = await BookIssuedHistory.findOne({ bookId: _id });

      if (bookHistory && bookHistory.bookId && bookHistory.history) {
        bookHistory.history.unshift({
          issuer: book.issuedDetails.issuer,
          checkoutDate: book.issuedDetails.issuedDate,
          checkinDate: new Date(),
        });

        await BookIssuedHistory.findOneAndUpdate(
          { bookId: _id },
          {
            $set: {
              history: bookHistory.history,
            },
          }
        );
      } else {
        await BookIssuedHistory.create({
          bookId: _id,
          history: [
            {
              issuer: book.issuedDetails.issuer,
              checkoutDate: book.issuedDetails.issuedDate,
              checkinDate: new Date(),
            },
          ],
        });
      }

      await Book.findOneAndUpdate(
        { _id },
        {
          $set: {
            status: "check-in",
            issuedDetails: {
              issuer: null,
              issuedDate: null,
              returnDate: null,
            },
          },
        }
      );

      return formatResponse(200, "Success", "Book check-in successfully");
    }
    return formatResponse(422, "Error", "This book is not issued");
  }

  throw new BaseError("No Book found", 404);
}

async function checkOut(data, _id) {
  const { name, phoneNo, nationalID, checkOutDate, returnDate } = data;

  const response = validate.bookCheckoutSchema.validate({
    name,
    phoneNo,
    nationalID,
    checkOutDate,
    returnDate,
  });

  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }

  const book = await Book.findOne({ _id });

  if (book) {
    if (book.status === "check-in") {
      await Book.findOneAndUpdate(
        { _id },
        {
          $set: {
            status: "check-out",
            issuedDetails: {
              issuer: {
                name,
                phoneNo,
                nationalID,
              },
              issuedDate: checkOutDate,
              returnDate,
            },
          },
        }
      );

      return formatResponse(200, "Success", "Book Checkout Successfully");
    }
    return formatResponse(422, "Error", "Book already check-out");
  }

  throw new BaseError("No Book found", 404);
}

module.exports = {
  getIssuedDetails,
  checkIn,
  checkOut,
};
