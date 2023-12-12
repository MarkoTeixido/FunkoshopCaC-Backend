const data = require("../services/service_product");

const adminControllers = {
    index: async (req, res) => {
        const collections = await data.getAllProducts();
        res.render('admin/admin', {
            view: {
                title: "Admin | Productos"
            },
            collections: collections.data
        })
    },
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
    delete: async (req, res) => {

        try {
            const result = await data.deleteProductById(req.params.id)
            res.redirect('/admin/productos')
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}

module.exports = adminControllers;
