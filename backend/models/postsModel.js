const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    // Definition of the model
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    softwareName: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('post', postSchema);