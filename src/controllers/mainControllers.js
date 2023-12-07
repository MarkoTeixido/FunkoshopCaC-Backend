const data = require('../../funkosData.json');

const mainControllers = {
    defaultView: (req, res) => res.render('home', {
      view: {
        title: "Home | Funkoshop"
      },
      collections: data
    }),
    homeView: (req, res) => res.render('home', {
        view: {
          title: "Home | Funkoshop"
        },
        collections: data 
    }),
    contactView: (req, res) => res.render('contact', {
      view: {
        title: "Contact | Funkoshop"
      },
      collections: data 
    }),
    aboutView: (req, res) => res.send("Route for about view controller"),
    faqsView: (req, res) => res.send("Route for faqs view")
}

module.exports = mainControllers;