const  user  = require('../models/model_user');


// Service user (GET) get all
const getAllUser = async () => {
    try {
      const rows = await user.findAll();
  
      const response = {
        isError: false,
        data: rows,
      };

      console.log(JSON.stringify(response, null, 2));
  
      return response;
    } catch (e) {
      const error = {
        isError: true,
        message: `No pudimos recuperar los datos ${e}.`,
      };
  
      console.error(JSON.stringify(error, null, 2)); 
  
      return error;
    }
};


// Service user (GET) get one by id
const getUserById = async (userId) => {
    try {
      const row = await user.findByPk(userId);
  
      if (!row) {
        const error = {
          isError: true,
          message: `No se encontró ningún producto con el ID ${userId}.`,
        };
  
        console.error(JSON.stringify(error, null, 2));
  
        return error;
      }
  
      const response = {
        isError: false,
        data: row,
      };
  
      console.log(JSON.stringify(response, null, 2));
  
      return response;
    } catch (e) {
      const error = {
        isError: true,
        message: `No pudimos recuperar los datos ${e}.`,
      };
  
      console.error(JSON.stringify(error, null, 2));
  
      return error;
    }
};


// Service user (GET) create
async function createUser(userData) {
    try {
      console.log("estas creando usuario en createUser");
      const createdUser = await user.create({
        name: userData.name,
        lastname: userData.lastname,
        email: userData.email,
        password: userData.password,
        create_time: new Date(),
    });

    console.log('Usuario creado:', createdUser.toJSON());

    const response = {
    isError: false,
    data: createdUser.toJSON(),
    };

    return response;
  
    } catch (error) {
      console.error('Error al crear el usuario:', error);
  
      throw new Error('Error al crear el usuario');
    }
}


module.exports = {
    getAllUser,
    getUserById, 
    createUser,
};