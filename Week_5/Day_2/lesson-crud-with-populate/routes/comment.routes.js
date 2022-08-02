const router = require('express').Router();

const User = require('../models/User.model');
const Post = require('../models/Post.model');
const Comment = require('../models/Comment.model');

// ****************************************************************************************
// POST route - create a comment of a specific post
// ****************************************************************************************

router.post('/posts/:postId/comment', (req, res, next) => {
  const { postId } = req.params;
  const { content, authorName } = req.body;

  //getting the user first
  User.findOne({ username: authorName })
    .then((user) => {
      return Comment.create({ author: user._id, content });
    })
    .then((newComment) => {
      return Post.findByIdAndUpdate(postId, { $push: { comments: newComment._id } });
    })
    .then(() => res.redirect(`/posts/${postId}`))
    .catch((err) => next(err));
});

module.exports = router;
