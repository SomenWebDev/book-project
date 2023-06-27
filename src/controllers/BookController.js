const BookModel = require("../models/BookModel");

// Retrieve All books

exports.getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Retrieve a specific book by id
exports.getBookById = async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book Not Found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a New book

exports.createBook = async (req, res) => {
  try {
    const book = new BookModel(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book Not Found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (book) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
