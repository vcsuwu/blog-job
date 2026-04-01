const express = require('express')
const { posts } = require('./models/posts')
const { users, verifyUser } = require('./models/users')
const postsRouter = require('./routes/posts')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render("index", { title: "niggers", posts: posts.slice(-2).reverse() })
})

app.get('/forms', (req, res) => {
  res.render("forms")
})

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.post('/forms', async (req, res) => {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.sendStatus(404)
  }
  const verified = await verifyUser(req.body.username, req.body.password)
  if (verified) {
    console.log("yup data is alr")
    return res.redirect('/forms')
  }
  return res.send("youre nigga")
})

app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
