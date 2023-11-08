const mainControllers = {
    homeView: (req, res) => res.send("Route for home view controller"),
    contactView: (req, res) => res.send("Route for contact view"),
    aboutView: (req, res) => res.send("Route for about view controller"),
    faqsView: (req, res) => res.send("Route for faqs view")
}

module.exports = mainControllers;