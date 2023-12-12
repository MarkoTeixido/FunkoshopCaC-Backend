const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/conn');
const { licence } = require('./model_licence');
const { category } = require('./model_category');

// Set Product Model
const product = sequelize.define("product", {
  product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dues: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  image_front: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image_back: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  create_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  licence_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

// Set relationship with tables
product.belongsTo(category, { foreignKey: 'category_id' });
product.belongsTo(licence, { foreignKey: 'licence_id' });

module.exports = { product };
