const bcrypt = require("bcrypt");

const { Client, Pool } = require("pg")




const saltRounds = 10;
let testPassword = "nigga";

//bcrypt.genSalt(saltRounds, function(err, salt) {
//  bcrypt.hash(testPassword, salt, function(err, hash) {
//    users[0].password = hash;
//  })
//});

const pool = new Pool({
  database: "mydb",
})

const getUsers = async function () {
  const res = await pool.query('SELECT * from users')
  console.log(res)
  return res.rows
}

const findUser = async function (username) {
  const users = await getUsers().catch(console.error)
  console.log(users)
  return users.find(user => user.name === username)
}

const verifyUser = async function (username, password) {
  const user = await findUser(username)
  if (user) {
    console.log(user.password)
    //return await bcrypt.compare(password, user.password)
    return user.password === password
  }
  return false
}

const createUser = async function (username, password) {
  const user = await findUser(username)
  if (user) {
    return
  } else {
    const res = await pool.query('INSERT INTO users VALUES(3,$1,$2)', [username, password])
    return res
  }

}

module.exports = {
  verifyUser,
  createUser, 
  getUsers,
}
