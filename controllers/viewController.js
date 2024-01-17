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
    let query = Book.find({ user: res.locals.user._id });
    // console.log(res.locals.user);

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    
    query = query.skip(skip).limit(limit);

    const allBooks = await query;

    res.status(200).render('myBooks', {
        title: 'My Books Page',
        books: allBooks
    });
});

exports.getBookPage = catchAsync(async(req, res, next) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;

    let book = await Book.findOne({ title: req.params.title }).populate({
        path: 'notes',
        select: 'title description content -book',
        options: {
            skip,
            limit
        }
    }).populate({
        path: 'quotes',
        select: 'quote quotee -book',
        options: {
            skip,
            limit
        }
    }).select('title author');

    res.status(200).render('book', {
        title: book.title,
        book
    });
});