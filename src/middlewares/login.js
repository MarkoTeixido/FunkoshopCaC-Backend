const isLogged = (req, res, next) => {
    if (req.session.userId) {
     return next();
    }
  
    return res.render("auth/login", {
        view:{
          title: "Login | Funkoshop"
        },
        errors: [{ msg: "Necesita iniciar sesión para poder ingresar a administración." }],
    });
};

module.exports = {
    isLogged
};