const { bookHandlingService } = require("../services");
const { formatResponse } = require("../helpers/utility");

async function getcheckedOutDetails(req, res) {
  try {
    const response = await bookHandlingService.getcheckedOutDetails(
      req.url.split("/")[2]
    );
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

async function checkIn(req, res) {
  try {
    const response = await bookHandlingService.checkIn(req.url.split("/")[2]);
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
    const response = await bookHandlingService.checkOut(
      req.body,
      req.url.split("/")[2]
    );
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
  getcheckedOutDetails,
  checkIn,
  checkOut,
};
