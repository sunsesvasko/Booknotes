const Book = require('../models/bookModel');

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getLanding = (req, res) => {
    res.status(200).render('home', {
        title: 'Landing Page',
    });
}

exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
        title: 'Login Page'
    });
}

exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        title: 'Register Page'
    });
}

exports.getMyBooksPage = catchAsync(async(req, res, next) => {
    const allBooks = await Book.find();

    res.status(200).render('myBooks', {
        title: 'My Books Page',
        books: allBooks
    });
});

exports.getBookPage = catchAsync(async(req, res, next) => {
    const book = await Book.findOne({ title: req.params.title }).populate({
        path: 'notes',
        select: 'title description content -book -_id'
    }).populate({
        path: 'quotes',
        select: 'quote quotee -book -_id'
    }).select('title author');
    // console.log(book);

    res.status(200).render('book', {
        title: book.title,
        book
    });
});