const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 9999.99,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
    precision: 1,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
