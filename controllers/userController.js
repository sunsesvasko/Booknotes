const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


exports.getUser = catchAsync(async(req, res, next) => {
    const user = await User.findById(req.params.id);

    if(!user) return next(new AppError('No user found with that ID', 404));

    res.status(200).json({
        status: 'success',
        user
    });
})

exports.getAllUsers = catchAsync(async(req, res, next) => {
    const users = await User.find().select('-__v');

    res.status(200).json({
        status: 'success',
        length: users.length,
        users
    });
});

exports.createUser = catchAsync(async(req, res, next) => {
    const newUser = await User.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    });
});

exports.deleteUser = catchAsync(async(req, res, next) => {
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
        status: 'success'
    });
});

exports.updateUser = catchAsync(async(req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
    });

    if(!user) return next(new AppError('No user found with that ID', 404));

    res.status(200).json({
        status: 'success',
        user
    });
});