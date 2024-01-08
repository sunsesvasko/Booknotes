const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: [true, 'A quote must have content.']
    },
    quotee: {
        type: String
    },
    book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Quote',
        required: [true, 'A quote must belong to a book.']
    }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
