const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const Products = require('./products.model');
const Users = require('./users.model');

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
});

Stars.belongsTo(Products, { foreignKey: 'product_id' });
Stars.belongsTo(Users, { foreignKey: 'user_id' });

module.exports = Stars;
