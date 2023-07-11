const express = require('express');

const { 
    getPost,
    getAllPosts,
    addPost
} = require('../controllers/postsController')

const router = express.Router();

// Get all posts
router.get('/', (req, res) => {
    res.json({ mssg: "GET all posts" })
});

// Get one post by ID
router.get('/:id', (req, res) => {
    res.json({ mssg: `GET a post by ID` })
});

// Add a post
router.post('/', (req, res) => {
    res.json({ mssg: "POST a post" })
});

// Delete a post by ID
router.delete('/:id', (req, res) => {
    res.json({ mssg: "DELETE a post by ID" })
});

// Update a post by ID
router.patch('/:id', (req, res) => {
    res.json({ mssg: "PATCH a post by ID" })
});

module.exports = router;