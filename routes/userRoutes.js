const router = require('express').Router();
const User = require('../models/User');

// GET all users
router.get('/users', async (req, res) => {
    try {
        const userData = await User.find({});
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single user by its _id
router.get('/users/:id', async (req, res) => {
    try {
        const userData = await User.findById(req.params.id).populate('thoughts').populate('friends');
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new user
router.post('/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT to update a user by its _id
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE to remove user by its _id
router.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST to add a new friend to a user's friend list
router.post('/users/:userId/friends/:friendId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user.friends.includes(req.params.friendId)) {
            user.friends.push(req.params.friendId);
            await user.save();
            res.status(200).json({ message: 'Friend added successfully' });
        } else {
            res.status(400).json({ message: 'Friend already in friend list' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE to remove a friend from a user's friend list
router.delete('/users/:userId/friends/:friendId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        user.friends = user.friends.filter(friend => friend.toString() !== req.params.friendId);
        await user.save();
        res.status(200).json({ message: 'Friend removed successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
