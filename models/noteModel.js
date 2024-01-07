const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A note must have a title.']
    },
    description: {
        type: String,
    },
    content: {
        type: String
    },
    book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Note',
        required: [true, 'A note must belong to a book.']
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;