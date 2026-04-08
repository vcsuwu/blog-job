const { Pool } = require("pg")

const pool = new Pool({
  database: "mydb",
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}
