const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/conn');

// Set Licence Model
const licence = sequelize.define('licence', {
    licence_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    licence_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    licence_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    licence_image:{
      type: DataTypes.STRING,
      allowNull: true,
    },
});

module.exports = { licence };