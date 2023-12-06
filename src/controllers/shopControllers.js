const data = require("../../funkosData.json");

const shopControllers = {
  shopView: (req, res) => res.render("shop/shop", {
    view: {
      title: "Shop | Funkoshop"
    },
    collections: data
  }),
  idView: (req, res) =>res.send("Route for find and retrieve a product from the id"),
  itemView: (req, res) =>res.send("shop/item", {
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
