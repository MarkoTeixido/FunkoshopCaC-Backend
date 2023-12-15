const { licence } = require('../models/model_licence');

// Service licence (GET) get all
const getAllLicence = async () => {
    try {
      const rows = await licence.findAll();
  
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

//getAllLicence();


// Service licence (GET) get one by id
const getLicenceById = async (licenceId) => {
    try {
      const row = await licence.findByPk(licenceId);
  
      if (!row) {
        const error = {
          isError: true,
          message: `No se encontró ningún producto con el ID ${licenceId}.`,
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

//getLicenceById(1);

module.exports = {
  getAllLicence,
  getLicenceById,
}