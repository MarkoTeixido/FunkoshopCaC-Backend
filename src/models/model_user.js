const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/conn');
const bcryptjs = require("bcryptjs");

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
      unique: true,
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

user.beforeSave(async (user) => {
  const { password } = user;

  const hash = await bcryptjs.hash(password, 12);

  user.password = hash;
});

(async () => {
  await sequelize.sync();
})();


module.exports =  user ;