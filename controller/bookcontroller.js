const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, author, price, rating } = req.body;

    // Create a new book
    const book = new Book({
      title,
      author,
      price,
      rating,
    });

    await book.save();

    res.status(201).json({ message: 'Book created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, price, rating } = req.body;

    const book = await Book.findByIdAndUpdate(id, { title, author, price, rating });

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ message: 'Book updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};
