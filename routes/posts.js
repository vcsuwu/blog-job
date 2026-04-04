const express = require("express");
const router = express.Router();
const { getPosts, findPost, addPost, removePost, updatePost } = require('../models/posts')

router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router.get('/', (req, res) => {
  return res.render('posts')
})

router.get('/:title', async (req, res) => {
  const post = await findPost(req.params.title)
  if (!post) {
    return res.status(404).send("No such post");
  }
  return res.render("post", { post })
})

router.post('/', async (req, res) => {
  if (!req.body || !req.body.title || !req.body.description) {
    return res.sendStatus(404)
  }
  addPost(req.body.title, req.body.description)
  console.log(getPosts())
  return res.redirect('/')
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
