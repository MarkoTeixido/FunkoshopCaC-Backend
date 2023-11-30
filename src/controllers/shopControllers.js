const shopControllers = {
    shop: (req, res) => res.send ('Route for Shop view'),
    id: (req, res) => res.send ('Route for find and retrieve a product from the id'),
    item: (req, res) => res.send ('Route for add the current item to the shop cart'),
    cart: (req, res) => res.send ('Route for cart view'),
    checkout: (req, res) => res.send ('Route for go to checkout page'),
}

module.exports = shopControllers;
