const { bookHandlerService } = require("../services");
const { formatResponse } = require("../helpers/utility");

async function checkIn(req, res) {
  try {
    const response = await bookHandlerService.checkIn(req.id);
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

async function checkOut(req, res) {
  try {
    const response = await bookHandlerService.checkOut(req.body, req.id);
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
  checkIn,
  checkOut,
};
