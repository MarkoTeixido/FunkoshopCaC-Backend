const data = require('../../funkosData.json')

const adminControllers = {
    index: (req, res) => res.render('admin/admin', {
        view: {
            title: "Admin | Productos"
        },
        collections: data
    }),
    createView: (req, res) => res.render('admin/create', {
        view: {
            title: "Admin | Crear producto"
        },
        collections: data
    }),
    create: (req, res) => res.send('Route for create a product'),
    updateView: (req, res) => res.render('admin/edit', {
        view: {
            title: "Admin | Editar producto"
        },
        collections: data
    }),
    update: (req, res) => res.send('Route for edit a product'),
    delete: (req, res) => res.send('Route for delete a product'),
}

module.exports = adminControllers
