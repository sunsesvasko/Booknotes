const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name.']
    },
    email: {
        type: String,
        required: [true, 'A user must have an email.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email.']
    },
    password: {
        type: String,
        required: [true, 'A user must have a password.'],
        minlength: [8, 'A password must have at least 8 characters.'],
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Password must be confirmed.'],
        validate: {
            // This only works on .create() and .save()
            validator: function(passConfirm) {
                return passConfirm === this.password ? true : false;
            },
            message: 'Passwords are not the same!'
        }
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: [true, 'A user must have a gender.'],
    },
    isModified: {
        type: String,
        enum: ['Active', 'Inactive'],
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;