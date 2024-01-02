const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

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
});

module.exports = Users;
