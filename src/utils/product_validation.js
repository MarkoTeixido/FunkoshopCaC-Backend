const { body } = require("express-validator");

const productValidations = [
    body("category_id")
        .notEmpty()
        .withMessage("Es necesario elegir una categoria"),
    body("licence_id")
        .notEmpty()
        .withMessage("Es necesario elegir una licencia"),
    body("product_name")
        .notEmpty()
        .withMessage("Se requiere un nombre para el producto"),
    body("product_description")
        .notEmpty()
        .withMessage("Se requiere una descripción para el producto"),
    body("sku")
        .isAlphanumeric()
        .withMessage("El SKU solo puede incluir numeros o letras (no símbolos)")
        .matches(/^(?=(?:.*[A-Z]){3})(?=(?:.*[0-9]){3})[A-Z0-9]+$/)
        .withMessage("El SKU mínimo debe incluir 3 letras mayúsculas y 3 números")
        .notEmpty()
        .withMessage("Se requiere un SKU para el producto"),
    body("price")
        .isNumeric()
        .notEmpty()
        .withMessage("Se requiere un precio para el producto"),
    body("stock")
        .notEmpty()
        .withMessage("Se requiere indicar el stock del producto"),
    body("image_front")
        .notEmpty()
        .withMessage("Se requiere una imagen principal para el producto"),
    body("image_back")
        .notEmpty()
        .withMessage("Se requiere una imagen secundaria para el producto"),
];

module.exports = {
    productValidations
};