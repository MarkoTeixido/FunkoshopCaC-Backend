const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/conn');

// Set User Model
const user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    create_time:{
        type: DataTypes.DATE,
        allowNull: true,
    },
});

module.exports = { user };