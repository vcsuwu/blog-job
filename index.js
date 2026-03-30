const express = require('express')
const { posts } = require('./models/posts')
const postsRouter = require('./routes/posts')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render("index", { title: "niggers", posts: posts.slice(-2).reverse() })
})

app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
