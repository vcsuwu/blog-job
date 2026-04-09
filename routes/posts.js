//express
const express = require("express");
const router = express.Router();
//models
const { getPosts, findPost, addPost, removePost, updatePost } = require('../models/posts')
const { getUsers } = require('../models/users.js')
//components
const { Layout } = require('../components/layout.js')
const { Posts } = require('../components/Posts.js')
const { Post } = require('../components/Post.js')
//utils

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next()
  }
  else return res.redirect('/login')
}

async function isAdmin(id) {
  users = await getUsers()
  return users.some(userdb => userdb.id === id && userdb.name === "admin")
}

router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router.get('/', async (req, res) => {
  // if (await isAdmin(req.session.user)) {
  //   return res.send(Layout('Posts', Posts(await getPosts())))
  // }
  if (req.headers['hx-request']) {
    return res.send(Posts(await getPosts()))
  }
  res.send(Layout('Posts', Posts(await getPosts())))
})

router.get('/:id', async (req, res) => {
  const post = await findPost(req.params.id)
  if (!post) {
    return res.status(404).send("No such post");
  }
  res.send(Layout(`Post ${post.id}`, Post(post)))
})

router.post('/', isAuthenticated, async (req, res) => {
  if (!req.body || !req.body.title || !req.body.description) {
    return res.sendStatus(404)
  }
  addPost(req.body.title, req.body.description)
  console.log(getPosts())
  res.redirect('/')
})

router.post('/remove', isAuthenticated, (req, res) => {
  const { title = "default" } = req.body;
  removePost(title)
  res.redirect('/')
})

router.post('/change', isAuthenticated, (req, res) => {
  const { title = "default", desc = "desc" } = req.body;
  updatePost(title, desc)
  res.redirect('/')
})

module.exports = router;
