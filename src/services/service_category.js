const { category } = require('../models/model_category');

// Service licence (GET) get all
const getAllCategory = async () => {
    try {
      const rows = await category.findAll();
  
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

//getAllCategory();


// Service licence (GET) get one by id
const getCategoryById = async (categoryId) => {
    try {
      const row = await category.findByPk(categoryId);
  
      if (!row) {
        const error = {
          isError: true,
          message: `No se encontró ningún producto con el ID ${categoryId}.`,
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

//getCategoryById(1);


module.exports = {
    getAllCategory,
    getCategoryById,
}