const dataUser = require('../services/service_user');

const authControllers = {
    loginView: (req, res) => res.render('auth/login', {
        view: {
          title: "Login | Funkoshop"
        },
    }),
    loginUser: (req, res) => {},
    registerView: (req, res) => res.render('auth/register', {
        view:{
            title: "Register | Funkoshop"
        },
    }),
    registerUser: (req, res) => {},
    logoutView: (req, res) => res.send("Route for logout view")
}

module.exports = authControllers;