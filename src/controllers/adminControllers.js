const data = require('../../funkosData.json')

const adminControllers = {
    // index: (req,res) => res.render('admin', {
    //     view: {
    //         title: "Admin | Funkoshop"
    //     },
    //     collections: data
    // }),
    index: (req, res) => res.send("Route for display the list of products"),
    storeView: (req, res) => res.send("Route for view form create product"),
    store: (req, res) => res.send('Route for create a product'),
    updateView: (req, res) => res.send('Route for see the view and Information of the product to modify'),
    update: (req, res) => res.send('Route for edit a product'),
    delete: (req, res) => res.send('Route for delete a product'),
}

module.exports = adminControllers
