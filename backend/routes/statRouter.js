const express = require('express');

const { getNumberOfPages,
    getNumberOfPosts
} = require('../controllers/statController');

const router = express.Router();

// Get number of pages
router.get('/pages/', getNumberOfPages);
router.get('/posts/', getNumberOfPosts);

module.exports = router;