const data = require("../services/service_product");

const mainControllers = {
    defaultView: async (req, res) => {
      const collections = await data.getAllProducts();
      res.render('home', {
      view: {
        title: "Home | Funkoshop"
      },
      collections: collections.data
    })},
    homeView: async (req, res) => {
      const collections = await data.getAllProducts();
      res.render('home', {
      view: {
        title: "Home | Funkoshop"
      },
      collections: collections.data
    })},
    contactView: (req, res) => res.render('contact', {
      view: {
        title: "Contact | Funkoshop"
      }, 
    }),
    aboutView: (req, res) => res.send("Route for about view controller"),
    faqsView: (req, res) => res.send("Route for faqs view")
};

module.exports = mainControllers;