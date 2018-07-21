const mongoose = require('mongoose');
const Post = require('../models/posts');
const schema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    userId: {
        type: Number
    },
    phone: {
        required: true,
        type: Number
    },
    email: {
        required: true,
        type: String
    },
    status: {
        type: String
    },
    followers: {
        type: Number,
    },
    following: {
        type: Number
    }
}, {timestamps: true}, {versionKey: false});

module.exports = mongoose.model('User', schema);