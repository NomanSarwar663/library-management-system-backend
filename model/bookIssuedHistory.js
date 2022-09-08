const mongoose = require("mongoose");

const bookHistorySchema = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
    },
    history: [
      {
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
        checkoutDate: {
          type: Date,
          default: null,
        },
        checkinDate: {
          type: Date,
          default: null,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("bookHistory", bookHistorySchema);
