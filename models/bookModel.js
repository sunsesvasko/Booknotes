const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String, 
        unique: true,
        required: [true, 'A book must have a title'],
    },
    author: {
        type: String,
        required: [true, 'A book must have an author.']
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;