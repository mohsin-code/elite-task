const sequelize = require('../config/db')
const { DataTypes } = require('sequelize')

// Create a Model for the data of all the Sankeys
const Products = sequelize.define('products', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'products',
  timestamps: false
})

// Check if table exists in database
sequelize.sync().then(() => {
  // console.log('products table is now available!');
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = Products
