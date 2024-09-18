// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/post').default;

// Index route
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: 'desc' });
    res.render('index', { posts: posts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// New post form route
router.get('/new', (req, res) => {
  res.render('new');
});

// Create post route
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  try {
    await post.save();
    res.redirect('/posts');
  } catch (err) {
    res.render('new', { post: post, error: err.message });
  }
});

// Show post route
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Invalid post ID' });
  }
  try {
    const post = await Post.findById(id);
    // ...
  } catch (err) {
    // ...
  }
});

// Edit post form route
router.get('/:id/edit', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {  // Check if post is null
      return res.status(404).send('Post not found');
    }
    res.render('edit', { post: post });
  } catch (err) {
    res.status(500).send('Error retrieving post');
  }
});



// Update post route
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    await post.save();
    res.redirect(`/posts/${post.id}`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete post route
router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;