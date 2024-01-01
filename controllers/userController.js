const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


exports.getUser = catchAsync(async(req, res, next) => {

    res.status(200).json({
        status: 'success'
    });
})

exports.getAllUsers = catchAsync(async(req, res, next) => {

    res.status(200).json({
        status: 'success'
    });
});

exports.createUser = catchAsync(async(req, res, next) => {
    const newUser = await User.create(req.body);

    res.status(201).json({
        status: 'success',
        user: newUser
    });
});

exports.deleteUser = catchAsync(async(req, res, next) => {

    res.status(200).json({
        status: 'success'
    });
});

exports.updateUser = catchAsync(async(req, res, next) => {

    res.status(200).json({
        status: 'success'
    });
});