const { product } = require('../models/model_product');

// Prueba de creación de producto
async function testCreateProduct() {
    try {
        const createdProduct = await product.create({
        product_name: 'productaso',
        product_description: 'Descripción del productaso',
        price: 1999.99,
        stock: 50,
        sku: 'ABC123',
        image_front: 'front.jpg',
        image_back: 'back.jpg',
        create_time: new Date(),
        });

        console.log('Producto creado:', createdProduct.toJSON());
    } catch (error) {
        console.error('Error al crear el producto:', error);
    }
}
    
// Llama a la funcion para probar
testCreateProduct();