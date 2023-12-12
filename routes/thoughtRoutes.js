const router = require('express').Router();
const { Thought, User } = require('../models');

// GET to get all thoughts
router.get('/thoughts', async (req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET to get a single thought by its _id
router.get('/thoughts/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST to create a new thought
router.post('/thoughts', async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: newThought._id } });
        res.json(newThought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT to update a thought by its _id
router.put('/thoughts/:id', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE to remove a thought by its _id
router.delete('/thoughts/:id', async (req, res) => {
    try {
        await Thought.findByIdAndDelete(req.params.id);
        res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST to create a reaction stored in a single thought's reactions array field
router.post('/thoughts/:thoughtId/reactions', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: req.body } },
            { new: true }
        );
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete('/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
