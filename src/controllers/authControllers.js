const dataUser = require('../services/service_user');
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const authControllers = {
    loginView: (req, res) => res.render('auth/login', {
        view: {
          title: "Login | Funkoshop"
        },
    }),
    loginUser: async (req, res) => {
        const errors = validationResult(req);
      
        if (!errors.isEmpty()) {
          return res.render("auth/login", {
            values: req.body,
            errors: errors.array(),
          });
        }
      
        try {
          const user = await dataUser.findOne({
            where: {
              email: req.body.email,
            },
          });
      
          if (!user) {
            res.render("auth/login", {
              values: req.body,
              errors: [{ msg: "El correo y/o contraseña son incorrectos (email)" }],
            });
          } else if (!(await bcryptjs.compare(req.body.password, user.password))) {
            res.render("auth/login", {
              values: req.body,
              errors: [
                { msg: "El correo y/o contraseña son incorrectos (password)" },
              ],
            });
          } else {
            req.session.userId = user.id;
      
            res.redirect("/");
          }
        } catch (error) {
          console.log(error);
          res.send(error);
        }
    },
    registerView: (req, res) => res.render('auth/register', {
        view:{
            title: "Register | Funkoshop"
        },
    }),
    registerUser: async (req, res) => {
        const errors = validationResult(req);
      
        if (!errors.isEmpty()) {
          return res.render("auth/register", {
            values: req.body,
            errors: errors.array(),
          });
        }
      
        try {
          const user = await dataUser.createUser(req.body);
      
          console.log(req.body, user);
          res.send("Registrado");
        } catch (error) {
          console.log(error);
          res.send(error);
        }
    },
    logoutView: (req, res) => res.send("Route for logout view")
};

module.exports = authControllers;