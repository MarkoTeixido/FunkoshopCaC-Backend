const dataProduct = require("../services/service_product");
const datalicence = require("../services/service_licence");
const dataCategory = require("../services/service_category");

const adminControllers = {
    index: async (req, res) => {
        try{
            const collections = await dataProduct.getAllProducts();
            res.render('admin/admin', {
                view: {
                    title: "Admin | Productos"
                },
                collections: collections.data,
            }); 
        } catch(error){
            console.log(error);
        }
    },
    createView: async (req, res) => {
        try{
            const licences = await datalicence.getAllLicence();
            const categories = await dataCategory.getAllCategory();
            res.render('admin/create', {
                view: {
                    title: "Admin | Crear producto"
                },
                licences: licences.data,
                categories: categories.data,
            });
        } catch(error){
            console.log(error);
        }    
    },
    create: async (req, res) => {
        try{
            const item = req.body;
            await dataProduct.createProduct(item);
            res.redirect('/admin/products');
        } catch(error){
            console.log(error);
        }
    },
    updateView: async (req, res) => {
        try{
            const licences = await datalicence.getAllLicences();
            const categories = await dataCategory.getAllCategory();
            res.render('admin/edit', {
                view: {
                    title: "Admin | Editar producto"
                },
                licences: licences.data,
                categories: categories.data,
            });
        } catch(error){
            console.log(error);
        }
    },
    update: (req, res) => res.send('Route for edit a product'),
    delete: async (req, res) => {
        try {
            const result = await dataProduct.deleteProductById(req.params.id);
            res.redirect('/admin/products');
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}

module.exports = adminControllers;
