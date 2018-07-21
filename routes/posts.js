const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');


// Get all posts
router.get('/', (req, res) => {
    Posts.find().exec().then((response) => {
        return res.status(200).json(response);
    });
});

// Creating a post
router.post('/', (req, res, next) => {
    const post = new Posts({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body
    });

    post.save().then((response) => {
        res.status(200).json(post);
    }).catch((error) => console.log(error));
});


// Deleting a post
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Posts.remove({id: id}).exec().then((response) => {
        res.status(200).json({
            message: 'Removed successfully'
        });
    });
});

// Get post by id
router.get('/:id', (req,res) => {
    const id = req.params.id;

    Posts.findById(id).exec().then((response) => {
        res.status(200).json(response);
    });
});

// Delete all posts
router.delete('/', (req,res) => {
    Posts.remove().exec().then((response) => {
        res.status(200).json({
            message: 'All Posts removed successfully'
        });
    });
});

module.exports = router;