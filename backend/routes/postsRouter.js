const express = require('express');

const {
    getPost,
    getUserPosts,
    getAllPostsPages,
    getAllPosts,
    addPost,
    deletePost,
    updatePost,
    search
} = require('../controllers/postsController')

const router = express.Router();

// Search Posts
router.get('/search/', search);

// Get all posts
router.get('/', getAllPosts);

// Get all posts for a user
router.get('/:user', getUserPosts)

// Get all posts paginated
router.get('/pages/', getAllPostsPages);

// Get one post by ID
router.get('/:id', getPost);

// Add a post
router.post('/', addPost);

// Delete a post by ID
router.delete('/:id', deletePost);

// Update a post by ID
router.patch('/:id', updatePost);

module.exports = router;