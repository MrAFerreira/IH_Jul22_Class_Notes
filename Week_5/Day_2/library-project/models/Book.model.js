const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    rating: Number,
  },
  {
    timestamps: true,
  }
);

/* const Book = mongoose.model('Book', bookSchema)

module.exports = Book */

module.exports = model('Book', bookSchema);
