const PostModel = require("../models/postsModel");
const mongoose = require("mongoose");

// Get all posts
const getAllPosts = async (req, res) => {
    // add pagination 
    const posts = await PostModel.find({}).sort({ createdAt: -1 });
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
        const newPost = await PostModel.create({ title, body, author, category, softwareName });
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

// Delete a post

// Update a post

module.exports = {
    getPost,
    getAllPosts,
    addPost,
}