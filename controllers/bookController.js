const Book = require('../models/bookModel');
const Note = require('../models/bookModel');
const Quote = require('../models/bookModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


exports.getBook = catchAsync(async(req, res, next) => {
    const book = await Book.findById(req.params.id);

    if(!book) return next(new AppError('No book found with that ID', 404));

    res.status(200).json({
        status: 'success',
        book
    });
})

exports.getAllBooks = catchAsync(async(req, res, next) => {
    const books = await Book.find().select('-__v');

    res.status(200).json({
        status: 'success',
        length: books.length,
        books
    });
});

exports.createBook = catchAsync(async(req, res, next) => {
    const newBook = await Book.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            book: newBook
        }
    });
});

exports.deleteBook = catchAsync(async(req, res, next) => {
    await Book.findByIdAndDelete(req.params.id);
    // const book = await Book.findById(req.params.id).populate({
    //     path: 'notes',
    //     select: 'title'
    // }).populate({
    //     path: 'quotes',
    //     select: 'title'
    // });

    res.status(204).json({
        status: 'success'
    });
});

exports.updateBook = catchAsync(async(req, res, next) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
    });

    if(!book) return next(new AppError('No book found with that ID', 404));

    res.status(200).json({
        status: 'success',
        book
    });
});