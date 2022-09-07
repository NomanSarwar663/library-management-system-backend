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
            required: true,
            trim: true,
            min: 3,
            max: 20,
          },
          phoneNo: {
            type: String,
            required: true,
            trim: true,
            min: 10,
            max: 15,
          },
        },
        checkoutDate: {
          type: Date,
          required: true,
        },
        checkinDate: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("bookHistory", bookHistorySchema);
