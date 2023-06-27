const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    publishedYear: {
      type: Number,
    },
  },
  { versionKey: false }
);

const BookModel = mongoose.model("Book", BookSchema);

module.exports = BookModel;
