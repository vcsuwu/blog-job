const db = require('./db')

const getUsers = async function() {
  const res = await db.query('SELECT * from users')
  console.log(res)
  return res.rows
}

const findUser = async function(name) {
  const users = await getUsers()
  console.log(users)
  return users.find(user => user.name === name)
}

const createUser = async function(username, password) {
  const res = await db.query('INSERT INTO users(name,password) VALUES($1,$2)', [username, password])
  return res
}

const verifyUser = async function(name, password) {
  const user = await findUser(name)
  if (user) {
    console.log(user.password)
    if (user.password === password) {
      return user
    }
  }
  return false
}


module.exports = {
  verifyUser,
  createUser,
  getUsers,
}
