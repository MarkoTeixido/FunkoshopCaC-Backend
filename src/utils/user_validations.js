const { body } = require("express-validator");
const model = require("../models/model_user");

const registerValidations = [
    body("name")
      .notEmpty()
      .withMessage("Ingrese un nombre válido."),
    body("lastname")
      .notEmpty()
      .withMessage("Ingrese un apellido válido."),
    body("email")
      .isEmail()
      .withMessage("Ingrese una dirección de correo electrónico válida.")
      .bail()
      .custom((value, { req }) => {
        return new Promise(async (resolve, reject) => {
          try {
            const user = await model.findOne({
              where: {
                email: value,
              },
            });
  
            if (user) {
              console.log(user);
              return reject();
            } else {
              return resolve();
            }
          } catch (error) {
            console.log(error);
          }
        });
      })
      .withMessage("Dirección de correo electrónico ya existente en nuestra base de datos."),
    body("password")
      .isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage("La contraseña debe contener 6 caracteres mínimamente, incluyendo en la misma: 1 Mayúscula, 1 Minúscula, 1 Número, 1 Símbolo.")
      .bail()
      .custom((value, { req }) => value === req.body.password_confirmation)
      .withMessage("Las contraseñas no coinciden."),
    body("password_confirmation")
      .notEmpty()
      .withMessage("Debe ingresar nuevamente su contraseña para confirmación.")
];
  
const loginValidations = [
    body("email")
      .isEmail()
      .withMessage("Ingrese una dirección de correo electrónico válida."),
    body("password")
      .isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }),
];

module.exports = { 
    registerValidations,
    loginValidations,
};