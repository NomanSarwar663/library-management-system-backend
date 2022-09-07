const { register, login } = require("./auth.service");
const { registerBook, getAllBooks, getBookDetails } = require("./book.service");
const { checkIn, checkOut } = require("./bookHandler.service");

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
  checkIn,
  checkOut,
};

module.exports = {
  authService,
  bookService,
  bookHandlingService,
};
