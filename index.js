//express
const express = require('express')
const session = require('express-session')
const postsRouter = require('./routes/posts')
//models
const { verifyUser } = require('./models/users')
//components
const { Layout } = require('./components/layout.js')
//utils
const { LoginForm } = require('./components/LoginForm.js')

const app = express()
const port = 3000

//default config
app.set('views', './views')
app.set('view engine', 'ejs')
sessionSettings = {
  secret: "test",
  saveUninitialized: false,
  resave: false,
}
app.use(session(sessionSettings))
app.use(express.static("public"))

//routing

app.get('/', (req, res) => {
  if (req.headers['hx-request']) {
    return res.send('<div> hola from home </div>')
  } else {
    return res.send(Layout('Home page', '<div> hola from home </div>'))
  }
})

app.get('/login', (req, res) => {
  if (req.session.user) {
    return res.send(Layout('Authorized', LoginForm('/login')))
  } else {
    return res.send(Layout('Login', LoginForm('/login')))
  }
})

app.post('/login', express.urlencoded({ extended: true }), async (req, res) => {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.sendStatus(404)
  }
  const verifiedUser = await verifyUser(req.body.username, req.body.password)
  if (verifiedUser) {
    console.log("yup data is alr")
    req.session.user = verifiedUser.id
    return res.send(`<div> You succesfully logged in! </div>`)
  } else {
    return res.send(LoginForm('/login'))
  }
})


app.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
