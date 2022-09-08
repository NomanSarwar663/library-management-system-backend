const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 50,
    },
    isbn: {
      type: String,
      required: true,
      trim: true,
      min: 10,
      max: 20,
    },
    publishYear: {
      type: Number,
      required: true,
      min: 1900,
      max: new Date().getFullYear(),
    },
    coverPrice: {
      type: Number,
      required: true,
      min: 1,
    },
    status: {
      type: String,
      required: true,
      trim: true,
      enum: ["check-in", "check-out"],
      default: "check-in",
    },
    issuedDetails: {
      issuer: {
        name: {
          type: String,
          trim: true,
          max: 20,
          default: null,
        },
        phoneNo: {
          type: String,
          trim: true,
          max: 15,
          default: null,
        },
        nationalID: {
          type: String,
          length: 11,
          default: null,
        },
      },
      issuedDate: {
        type: Date,
      },
      returnDate: {
        type: Date,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("book", bookSchema);
