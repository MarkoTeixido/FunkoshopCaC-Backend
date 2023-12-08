const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuración de Sequelize
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.DBPASS,{
  host: process.env.HOST,
  dialect:'mysql'
});

// Función asincrona para testear la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al autenticar la conexión:', error);
  }
}

testConnection(); // Llamamos a la función para probar la conexión a la base de datos

// Exportamos la instancia de Sequelize para su uso en otros archivos
module.exports = {
  sequelize,
};