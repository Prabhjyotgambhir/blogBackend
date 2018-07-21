const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    comments: {
        type: String
    },
    likes: {
        type: Number
    },
    views: {
        type: Number
    }
}, {timestamps: true}, {versionKey: false});

module.exports = mongoose.model('posts', schema);