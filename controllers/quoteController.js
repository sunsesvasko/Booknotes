const Quote = require('../models/quoteModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


exports.getQuote = catchAsync(async(req, res, next) => {
    const quote = await Quote.findById(req.params.id);

    if(!quote) return next(new AppError('No quote found with that ID', 404));

    res.status(200).json({
        status: 'success',
        quote
    });
})

exports.getAllQuotes = catchAsync(async(req, res, next) => {
    const quotes = await Quote.find().select('-__v');

    res.status(200).json({
        status: 'success',
        length: quotes.length,
        quotes
    });
});

exports.createQuote = catchAsync(async(req, res, next) => {
    const newQuote = await Quote.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            quote: newQuote
        }
    });
});

exports.deleteQuote = catchAsync(async(req, res, next) => {
    await Quote.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status: 'success'
    });
});

exports.updateQuote = catchAsync(async(req, res, next) => {
    const quote = await Quote.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
    });

    if(!quote) return next(new AppError('No quote found with that ID', 404));

    res.status(200).json({
        status: 'success',
        quote
    });
});