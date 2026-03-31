const bcrypt = require("bcrypt");
const saltRounds = 10;
let testPassword = "nigga";

const users = [
  {
    username: "admin",
    password: "placeholder",
  }
];


bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(testPassword, salt, function(err, hash) {
    users[0].password = hash;
  })
});

console.log(users)

module.exports = {
  users
}
