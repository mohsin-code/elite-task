const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

// Create a Model for the data of all the Sankeys
const Users = sequelize.define('users', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'users',
  timestamps: false
})

// Check if table exists in database
sequelize.sync().then(() => {
  // console.log('users table is now available!');
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = Users
