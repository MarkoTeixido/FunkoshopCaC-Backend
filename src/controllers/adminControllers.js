const data = require("../services/service_product");

const adminControllers = {
    index: async (req, res) => {
        const collections = await data.getAllProducts();
        res.render('admin/admin', {
        view: {
            title: "Admin | Productos"
        },
        collections: collections.data
    })},
    createView: (req, res) => res.render('admin/create', {
        view: {
            title: "Admin | Crear producto"
        }
    }),
    create: (req, res) => res.send('Route for create a product'),
    updateView: (req, res) => res.render('admin/edit', {
        view: {
            title: "Admin | Editar producto"
        }
    }),
    update: (req, res) => res.send('Route for edit a product'),
    delete: (req, res) => res.send('Route for delete a product'),
}

module.exports = adminControllers;
