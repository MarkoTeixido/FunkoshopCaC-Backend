const data = require('../../funkosData.json');

const authControllers = {
    loginView: (req, res) => res.render('auth/login', {
        view: {
          title: "Login | Funkoshop"
        },
        collections: data 
    }),
    loginUser: (req, res) => {},
    registerView: (req, res) => res.send('auth/register', {
        view:{
            title: "Register | Funkoshop"
        },
        collections: data
    }),
    registerUser: (req, res) => {},
    logoutView: (req, res) => res.send("Route for logout view")
}

module.exports = authControllers;