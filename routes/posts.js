const express = require("express");
const router = express.Router();
const { posts, findPost, addPost, removePost, updatePost } = require('../models/posts')

router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router.get('/', (req, res) => {
  res.send(posts)
})

router.get('/:title', (req, res) => {
  const post = findPost(req.params.title)
  if (!post) {
    return res.status(404).send("No such post");
  }
  res.render("post", { post })
})

router.post('/', (req, res) => {
  const { title = "default", desc = "default" } = req.body;
  addPost(title, desc)
  res.redirect('/')
})

router.post('/remove', (req, res) => {
  const { title = "default" } = req.body;
  removePost(title)
  res.redirect('/')
})

router.post('/change', (req, res) => {
  const { title = "default", desc = "desc" } = req.body;
  updatePost(title, desc)
  res.redirect('/')
})

module.exports = router;
