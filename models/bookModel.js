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
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    id: false,
});

bookSchema.virtual('notes', {
    ref: 'Note',
    foreignField: 'book',
    localField: '_id'
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;