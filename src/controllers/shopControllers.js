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
  idView: (req, res) =>res.send("Route for find and retrieve a product from the id"),
  itemView: (req, res, id) => res.render("shop/item", {
        
        view: {
          title: "Item | Funkoshop"
        },
        collections: data
    
  }),
  cartView: (req, res) => res.render("shop/cart", {
    view: {
      title: "Carrito | Funkoshop"
    },
    collections: data
  }),
  checkoutView: (req, res) => res.render("Route for go to checkout page"),
};

module.exports = shopControllers;
