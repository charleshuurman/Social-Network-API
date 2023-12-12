const mongoose = require('mongoose');
const moment = require('moment');
const ReactionSchema = require('./Reaction');

const { Schema, model } = mongoose;

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
    },
    username: {
      type: String,
      required: true
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
