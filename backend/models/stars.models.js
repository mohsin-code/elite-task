const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

// Create a Model for the data of all the Sankeys
const Stars = sequelize.define('stars', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  product_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  stars: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'stars',
  timestamps: true
})

// Check if table exists in database
sequelize.sync().then(() => {
  // console.log('stars table is now available!');
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = Stars
