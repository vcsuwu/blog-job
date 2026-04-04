const express = require('express')
var session = require('express-session')
const { posts } = require('./models/posts')
const { verifyUser, createUser, getUsers } = require('./models/users')
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

function isAuthenticated(req,res,next) {
  if (req.session.user) {
    return next()
  }
  else return res.redirect('/forms')
}

app.get('/forms', (req, res) => {
  res.render("forms")
})

app.post('/forms', express.urlencoded({ extended: true }) , async (req, res) => {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.sendStatus(404)
  }
  const verified = await verifyUser(req.body.username, req.body.password)
  if (verified) {
    console.log("yup data is alr")
    req.session.user = req.body.username
    return res.redirect('/')
  } else {
    await createUser(req.body.username, req.body.password)
    console.log(getUsers())
    return res.send("added new user")
  }
})

app.use(isAuthenticated)
app.get('/', (req, res) => {
  res.render("index", { title: "All posts", posts: posts.slice(-2).reverse() })
})

app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
