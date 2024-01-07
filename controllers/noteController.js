const Note = require('../models/noteModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


exports.getNote = catchAsync(async(req, res, next) => {
    const note = await Note.findById(req.params.id);

    if(!note) return next(new AppError('No note found with that ID', 404));

    res.status(200).json({
        status: 'success',
        note
    });
})

exports.getAllNotes = catchAsync(async(req, res, next) => {
    const notes = await Note.find().select('-__v');

    res.status(200).json({
        status: 'success',
        length: notes.length,
        notes
    });
});

exports.createNote = catchAsync(async(req, res, next) => {
    const newNote = await Note.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            note: newNote
        }
    });
});

exports.deleteNote = catchAsync(async(req, res, next) => {
    await Note.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status: 'success'
    });
});

exports.updateNote = catchAsync(async(req, res, next) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
    });

    if(!note) return next(new AppError('No note found with that ID', 404));

    res.status(200).json({
        status: 'success',
        note
    });
});