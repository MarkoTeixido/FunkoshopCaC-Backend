const data = require("../services/service_product");

const shopControllers = {
  shopView: async (req, res) => {
    const collections = await data.getAllProducts();
    res.render("shop/shop", {
      view: {
        title: "Shop | Funkoshop"
      },
      collections: collections.data
  })},
  idView: async (req, res) => {
    const collections = await data.getAllProducts();
    const id = req.params.id;
    const productById = await data.getProductById(id);
    console.log(productById);
    res.render("shop/item", {
      view: {
        title: "Item | Funkoshop"
      },
      collections: collections.data,
      productById: productById.data
  })},
  itemView: async (req, res, id) => {},
  cartView: (req, res) => res.render("shop/cart", {
    view: {
      title: "Carrito | Funkoshop"
    },
    collections: data
  }),
  checkoutView: (req, res) => res.render("Route for go to checkout page"),
};

module.exports = shopControllers;
