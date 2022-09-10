const { createResponse, formatResponse } = require("../helpers/utility");
const validate = require("../helpers/validationSchema");
const { BaseError } = require("../helpers/ErrorHandling");
const Book = require("../model/book");
const BookIssuedHistory = require("../model/bookIssuedHistory");

async function registerBook(data) {
  const { title, isbn, publishYear, coverPrice } = data;

  const response = validate.registerBookSchema.validate({
    title,
    isbn,
    publishYear,
    coverPrice,
  });

  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }

  const oldBook = await Book.findOne({ isbn });

  if (oldBook) {
    throw new BaseError("Book already exist", 400);
  }

  await Book.create({
    title,
    isbn,
    publishYear,
    coverPrice,
  });

  return formatResponse(201, "Success", "Book created");
}

async function getAllBooks() {
  const books = await Book.find();

  return formatResponse(200, "Success", "Books get Successfully", {
    books,
  });
}

async function getBookDetails(_id) {
  const book = await Book.findOne({ _id });
  let history = null;

  if (book) {
    const bookHistory = await BookIssuedHistory.findOne({ bookId: _id });

    if (bookHistory && bookHistory.bookId && bookHistory.history)
      history = bookHistory.history;

    return formatResponse(200, "Success", "Get Book detail Successfully", {
      data: {
        book,
        bookHistory: history,
      },
    });
  }
  throw new BaseError("Invalid book ID", 404);
}

module.exports = {
  registerBook,
  getAllBooks,
  getBookDetails,
};
