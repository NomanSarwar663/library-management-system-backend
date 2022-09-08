const { register, login } = require("./auth.service");
const { registerBook, getAllBooks, getBookDetails } = require("./book.service");
const {
  getcheckedOutDetails,
  checkIn,
  checkOut,
} = require("./bookHandler.service");

const authService = {
  register,
  login,
};

const bookService = {
  registerBook,
  getAllBooks,
  getBookDetails,
};

const bookHandlingService = {
  getcheckedOutDetails,
  checkIn,
  checkOut,
};

module.exports = {
  authService,
  bookService,
  bookHandlingService,
};
