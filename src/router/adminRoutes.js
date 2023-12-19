const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');
const { isLogged } = require('../middlewares/login');
const { productValidations } = require('../utils/product_validation');

router.get('/products', isLogged, adminControllers.index);
router.get('/products/create', isLogged, adminControllers.createView);
router.post('/products/create', productValidations, adminControllers.create);
router.get('/products/edit/:id', isLogged, adminControllers.updateView);
router.put('/products/edit/:id', productValidations, adminControllers.update);
router.delete('/products/delete/:id', adminControllers.delete);

module.exports = router;