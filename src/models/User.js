const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minLength: [10, 'Email must be at least 10 characters!'],
        match: [/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Incorrect email address!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [3, 'Username must be at least 3 characters!'],
        unique: true,
    },    
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [4, 'Password must be at least 4 characters!'],
    }
});

userSchema.virtual('rePassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new Error('Passwords don\'t match!');
        }
    });

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;