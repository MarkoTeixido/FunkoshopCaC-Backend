const dataProduct = require("../services/service_product");
const datalicence = require("../services/service_licence");
const dataCategory = require("../services/service_category");

const model = require("../models/model_product")

const adminControllers = {
    index: async (req, res) => {
        try {
            const collections = await dataProduct.getAllProducts();
            res.render('admin/admin', {
                view: {
                    title: "Admin | Productos"
                },
                collections: collections.data,
            });
        } catch (error) {
            console.log(error);
        }
    },
    createView: async (req, res) => {
        try {
            const licences = await datalicence.getAllLicence();
            const categories = await dataCategory.getAllCategory();
            res.render('admin/create', {
                view: {
                    title: "Admin | Crear producto"
                },
                licences: licences.data,
                categories: categories.data,
            });
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            const item = req.body;
            await dataProduct.createProduct(item);
            res.redirect('/admin/products');
        } catch (error) {
            console.log(error);
        }
    },
    updateView: async (req, res) => {
        try {
            const licences = await datalicence.getAllLicence();
            const categories = await dataCategory.getAllCategory();
            const product = await dataProduct.getProductById(req.params.id)
            res.render('admin/edit', {
                view: {
                    title: "Admin | Editar producto"
                },
                licences: licences.data,
                categories: categories.data,
                product: product.data,
            });
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {

        try {
            const affected = await dataProduct.updateProductById(req.params.id, req.body);
            console.log(affected);
            console.log(`Te devuelvo esto: ${affected[0]} HASTA ACAAAAA`);
            if (affected[0] == 1) {
                res.redirect("/admin/productos");
            } else {
                res.status(500).send("Error al actualizar el producto");
            }
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }

    },
    delete: async (req, res) => {
        try {
            await dataProduct.deleteProductById(req.params.id);
            res.redirect('/admin/products');
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}

module.exports = adminControllers;
