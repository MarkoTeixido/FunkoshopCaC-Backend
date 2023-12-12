const mysql2 = require('mysql2');
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Set Sequelize Config
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.DBPASS,{
  host: process.env.HOST,
  dialect:'mysql',
  dialectModule: mysql2,
  define: {
    freezeTableName: true, // Prevent sequelize from pluralizing table names
    timestamps: false  // Prevent sequelize don't add the timestamp attributes (updatedAt, createdAt)
  },
});

// Set async function for testing DB connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al autenticar la conexión:', error);
  }
}

testConnection(); // Call to async function for the test connection

// Export the instance by Sequelize
module.exports = {
  sequelize,
};