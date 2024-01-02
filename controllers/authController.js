const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { promisify } = require('util');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id) || signToken(user.id);

    const cookieOptions = {
        maxAge: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    };

    // Use when your domain is httpS not http
    // cookieOptions.secure = true;

    res.cookie('jwt', token, cookieOptions);

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    });
}

exports.register = catchAsync(async(req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        gender: req.body.gender
    });

    newUser.passwordConfirm = undefined;

    createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async(req, res, next) => {
    const { email, password } = req.body;

    // Check if email and password are input
    if(!email || !password) return next(new AppError('Please provide email and password!', 400));
    // Check if user exists or the password is correct
    const user = await User.findOne({ email });
    if(!user || !await user.correctPassword(password, user.password)) return next(new AppError('Wrong credentials!', 401));

    createSendToken(user, 200, res);
});

exports.logout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
        maxAge: new Date(Date.now() + 1000),
        httpOnly: true
    });

    res.status(200).json({ status: 'success' });
}