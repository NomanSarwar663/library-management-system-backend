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
