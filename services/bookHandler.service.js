const { createResponse, formatResponse } = require("../helpers/utility");
const validate = require("../helpers/validationSchema");
const { BaseError } = require("../helpers/ErrorHandling");
const Book = require("../model/book");
const BookIssuedHistory = require("../model/bookIssuedHistory");

async function checkIn(_id) {
 

  return formatResponse(200, "Success", "Book Check-in");
}

async function checkOut(data, _id) {
  const { name, phoneNo, nationalID, checkOutDate, returnDate } = data;

  const response = validate.registerUserSchema.validate({
    name,
    phoneNo,
    nationalID,
    checkOutDate,
    returnDate,
  });

  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }

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
          returnedDate: returnDate,
        },
      },
    }
  );
  return formatResponse(200, "Success", "Book Checkout Successfully");
}

module.exports = {
  checkIn,
  checkOut,
};
