const express = require('express')
var session = require('express-session')
const { getPosts } = require('./models/posts')
const { verifyUser, createUser, getUsers, findUserId } = require('./models/users')
const postsRouter = require('./routes/posts')

const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(session({
  secret: "test",
  saveUninitialized: false,
  resave: false,
}))

app.use(express.static("public"))


app.get('/login', (req, res) => {
  if (req.session.user) {
    return res.render("page", { title: "login" })
  } else {
    return res.render("page", { title: "login", content: "forms.ejs" })
  }
})

app.get('/register', (req, res) => {
  return res.render("page", { title: "Registration" })
})

app.post('/login', express.urlencoded({ extended: true }), async (req, res) => {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.sendStatus(404)
  }
  const verifiedUser = await verifyUser(req.body.username, req.body.password)
  if (verifiedUser) {
    console.log("yup data is alr")
    req.session.user = verifiedUser.id
    return res.redirect('/posts')
  } else {
    return res.redirect('/register')
  }
})

app.get('/', async (req, res) => {
  return res.render("page", { title: "Home page", content: "index.ejs", pass: { posts: await getPosts() } })
})

app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
