const { product } = require('../models/model_product');
const { licence } = require('../models/model_licence');
const { category } = require('../models/model_category');


// FALTA TERMINAR Y ACOMODAR

// Service product (POST) create
async function CreateProduct(dataProduct) {
    try {
        const createdProduct = await product.create({
        product_name: dataProduct.product_name,
        product_description: dataProduct.product_description,
        price: dataProduct.price,
        stock: dataProduct.stock,
        discount: dataProduct.discount,
        sku: dataProduct.sku,
        dues: dataProduct.dues,
        image_front: dataProduct.image_front,
        image_back: dataProduct.image_back,
        create_time: new Date(),
        licence_id: dataProduct.licence_id,
        category_id: dataProduct.category_id,
        });

        console.log('Producto creado:', createdProduct.toJSON());

        const response = {
            isError: false,
            data: createdProduct,
        };

        return response;
        
    } catch (error) {
        console.error('Error al crear el producto:', error);
    }
}
    
// Llama a la funcion para probar
// CreateProduct();


// Service product (GET) get all
const getAllProducts = async () => {
  try {
    const rows = await product.findAll({
      include: [
        {
          model: category,
          attributes: ['category_name'],
        },
        {
          model: licence,
          attributes: ['licence_name'],
        },
      ],
    });

    const formattedRows = rows.map(row => {
      const rowData = row.get({ plain: true });

      // Si hay una relación con licence, formatea la propiedad
      if (row.licence) {
        rowData.licence = row.licence.get({ plain: true });
      }

      // Si hay una relación con category, formatea la propiedad
      if (row.category) {
        rowData.category = row.category.get({ plain: true });
      }

      return rowData;
    });

    const response = {
      isError: false,
      data: formattedRows,
    };

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

// async function fetchData() {
//   try {
//     const result = await getAllProducts();
//     console.log(JSON.stringify(result, null, 2)); // 2 espacios de indentación para mejor legibilidad
//   } catch (error) {
//     console.error(`Error al obtener datos: ${error.message}`);
//   }
// }

// fetchData();


// Service product (GET) get one by id

//const productId = 1;
const getProductById = async (productId) => {
    try {
      const row = await product.findByPk(productId, {
        include: [
          {
            model: category,
            attributes: ['category_name'],
          },
          {
            model: licence,
            attributes: ['licence_name'],
          },
        ],
      });
  
      if (!row) {
        const error = {
          isError: true,
          message: `No se encontró ningún producto con el ID ${productId}.`,
        };
  
        console.error(JSON.stringify(error, null, 2));
  
        return error;
      }
  
      const rowData = row.get({ plain: true });
  
      // Si hay una relación con licence, formatea la propiedad
      if (row.licence) {
        rowData.licence = row.licence.get({ plain: true });
      }
  
      // Si hay una relación con category, formatea la propiedad
      if (row.category) {
        rowData.category = row.category.get({ plain: true });
      }
  
      const response = {
        isError: false,
        data: rowData,
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

// getProductById(productId);



// Service product (PUT) update one by id
const updateProductById = async (productId, updatedDataProduct) => {
    try {
      const existingProduct = await product.findByPk(productId);
  
      if (!existingProduct) {
        const error = {
          isError: true,
          message: `No se encontró ningún producto con el ID ${productId}.`,
        };
  
        console.error(JSON.stringify(error, null, 2));
  
        return error;
      }
  
      // Actualizar los campos del producto con los nuevos valores
      await existingProduct.update(updatedDataProduct);
  
      const updatedDataProduct = await product.findByPk(productId);
  
      const response = {
        isError: false,
        data: updatedDataProduct,
      };

      console.log(JSON.stringify(response, null, 2));
  
      return response;
    } catch (e) {
      const error = {
        isError: true,
        message: `No pudimos actualizar el producto con el ID ${productId}: ${e}`,
      };
  
      console.error(JSON.stringify(error, null, 2));
  
      return error;
    }
};

//updateProductById(productId, newDataProduct);



// Service product (DELETE) delete one by id
const deleteProductById = async (productId) => {
    try {
      const existingProduct = await product.findByPk(productId);
  
      if (!existingProduct) {
        const error = {
          isError: true,
          message: `No se encontró ningún producto con el ID ${productId}.`,
        };
  
        console.error(JSON.stringify(error, null, 2));
  
        return error;
      }
  
      // Eliminar el producto por su ID
      await existingProduct.destroy();
  
      const response = {
        isError: false,
        message: `Producto con ID ${productId} eliminado exitosamente.`,
      };

      console.log(JSON.stringify(response, null, 2));
  
      return response;
    } catch (e) {
      const error = {
        isError: true,
        message: `No pudimos eliminar el producto con el ID ${productId}: ${e}`,
      };
  
      console.error(JSON.stringify(error, null, 2));
  
      return error;
    }
};

//deleteProductById(productId);