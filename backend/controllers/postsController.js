const PostModel = require("../models/postsModel");
const mongoose = require("mongoose");
require('dotenv').config()

function validatePostLength(post) {
    if (post.length < process.env.BODYMIN || post.length > process.env.BODYMAX) {
        return false;
    } else {
        return true;
    }
}

function validateTitleLength(title) {
    if (title.length < process.env.TITLEMIN || title.length > process.env.TITLEMAX) {
        return false;
    } else {
        return true;
    }
}

// Get all posts
const getAllPostsPages = async (req, res) => {
    const page = req.query.page || 0;
    const postPerPage = 3;

    const posts = await PostModel.find({})
        .sort({ createdAt: -1 })
        .skip(page * postPerPage)
        .limit(postPerPage);
    res.status(200).json(posts);
}

const getAllPosts = async (req, res) => {
    const posts = await PostModel.find({})
        .sort({ createdAt: -1 });
    res.status(200).json(posts);
}

// Get post by ID
const getPost = async (req, res) => {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID." });
    }

    const post = await PostModel.findById(id);
    if (!post) {
        return res.status(404).json({ error: "No post with this ID exists." });
    }
    res.status(200).json(post);
}

// Add a post
const addPost = async (req, res) => {
    const { title, body, author, category, softwareName } = req.body;

    // Add validation for length.
    try {

        if (!validateTitleLength(title)) {
            return res.status(400).json({ error: `Parameter 'title' should be ${process.env.TITLEMIN}-${process.env.TITLEMAX} characters` });
        } else if (!validatePostLength(body)) {
            return res.status(400).json({ error: `Parameter 'body' should be ${process.env.BODYMIN}-${process.env.BODYMAX} characters` });
        }
        const newPost = await PostModel.create({ title, body, author, category, softwareName });
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a post
const deletePost = async (req, res) => {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID." });
    }

    const post = await PostModel.findOneAndDelete({ _id: id });

    if (!post) {
        return res.status(400).json({ error: "No post with this ID exists." });
    }

    res.status(200).json(post);
}

// Update a post
const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, body, author, category, softwareName } = req.body;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid ID." });
    } else if (!validateTitleLength(title)) {
        return res.status(400).json({ error: "Parameter 'title' should be 5-100 characters" });
    } else if (!validatePostLength(body)) {
        return res.status(400).json({ error: "Parameter 'body' should be 100-2500 characters" });
    }
    const post = await PostModel.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!post) {
        return res.status(400).json({ error: "No post with this ID exists." });
    }
    res.status(200).json(post);
}

module.exports = {
    getPost,
    getAllPostsPages,
    getAllPosts,
    addPost,
    deletePost,
    updatePost
}