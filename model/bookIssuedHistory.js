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
          type: Object,
          default: null,
        },
        checkOutDate: {
          type: Date,
          default: null,
        },
        checkInDate: {
          type: Date,
          default: null,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("bookHistory", bookHistorySchema);
