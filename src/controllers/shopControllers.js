const data = require("../../funkosData.json");

const shopControllers = {
  shopView: (req, res) => res.render("shop/shop", {
    view: {
      title: "Shop | Funkoshop"
    },
    collections: data
  }),
  idView: (req, res) =>res.render("Route for find and retrieve a product from the id"),
  itemView: (req, res) =>res.render("Route for add the current item to the shop cart"),
  cartView: (req, res) => res.render("Route for cart view"),
  checkoutView: (req, res) => res.render("Route for go to checkout page"),
};

module.exports = shopControllers;
