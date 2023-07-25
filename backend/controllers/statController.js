const mongoose = require("mongoose");
const PostModel = require("../models/postsModel");

const getNumberOfPages = async (req, res) => {
    PostModel.count({}).then(count => {
        pages = Math.ceil(count / 3);
        res.status(200).json({ pages: pages });
    });
}

const getNumberOfPosts = async (req, res) => {
    PostModel.count({}).then(count => {
        res.status(200).json({ "posts": count });
    });
}

module.exports = {
    getNumberOfPages,
    getNumberOfPosts
}