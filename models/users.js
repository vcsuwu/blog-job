const bcrypt = require("bcrypt");

const users = [
  {
    username: "admin",
    password: "placeholder",
  }
];

const saltRounds = 10;
let testPassword = "nigga";

bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(testPassword, salt, function(err, hash) {
    users[0].password = hash;
  })
});

console.log(users)

const findUser = function (username) {
  return users.find(user => user.username === username)
}

const verifyUser = async function (username, password) {
  const user = findUser(username)
  if (user) {
    console.log(user.password)
    return await bcrypt.compare(password, user.password)
  }
  return false
}

module.exports = {
  verifyUser,
  users
}
