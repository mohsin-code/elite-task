const config = require('./index.js')

module.exports = {
  dialect: 'mysql',
  database: config.db.database,
  username: config.db.user,
  password: config.db.password,
  host: config.db.host
}
