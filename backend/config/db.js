const { Sequelize } = require('sequelize')

// Create a connection with the database
const sequelize = new Sequelize(
  process.env.SQL_DATABASE,
  process.env.SQL_USER,
  process.env.SQL_PASSWORD,
  {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    dialect: 'mysql'
  }
)

// Check connection with database
const checkConn = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  sequelize.sync().then(() => {
    console.log('Tables synced successfully!')
  }).catch((error) => {
    console.error('Unable to create table : ', error)
  })
}

checkConn()

module.exports = sequelize
