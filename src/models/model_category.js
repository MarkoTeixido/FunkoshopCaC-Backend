const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/conn');

// Set Category Model
const category = sequelize.define('category', {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = { category };