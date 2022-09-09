const { bookService } = require("../services");
const { formatResponse } = require("../helpers/utility");

async function registerBook(req, res) {
  try {
    const response = await bookService.registerBook(req.body);
    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || 400)
      .json(formatResponse(statusCode || 400, "error", message));
  }
}

async function getAllBooks(req, res) {
  try {
    const response = await bookService.getAllBooks();
    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || 400)
      .json(formatResponse(statusCode || 400, "error", message));
  }
}

async function getBookDetails(req, res) {
  try {
    const response = await bookService.getBookDetails(req.params.id);
    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || 400)
      .json(formatResponse(statusCode || 400, "error", message));
  }
}

module.exports = {
  registerBook,
  getAllBooks,
  getBookDetails,
};
