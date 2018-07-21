const express = require('express');
const router = express.Router();
const User = require('../models/user');


// Get all Users
router.get('/', (req, res) => {
    User.find().exec().then((response) => {
        return res.status(200).json(response);
    });
});

// Creating a User
router.post('/', (req, res, next) => {
    const user = new User({
        name: req.body.name,
        status: req.body.status,
        email: req.body.email,
        phone: req.body.phone,
    });

    user.save().then((response) => {
        res.status(200).json(user);
    }).catch((error) => console.log(error));
});


// Deleting a User
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    User.remove({id: id}).exec().then((response) => {
        res.status(200).json({
            message: 'User Removed successfully'
        });
    });
});

// Get User by id
router.get('/:id', (req,res) => {
    const id = req.params.id;

    User.findById(id).exec().then((response) => {
        res.status(200).json(response);
    });
});

// Delete all Users
router.delete('/', (req,res) => {
    User.remove().exec().then((response) => {
        res.status(200).json({
            message: 'All Users removed successfully'
        });
    });
});

module.exports = router;