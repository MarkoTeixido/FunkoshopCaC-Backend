const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');
const { productValidations } = require('../utils/product_validation');

router.get('/products', adminControllers.index);
router.get('/products/create', adminControllers.createView);
router.post('/products/create', productValidations, adminControllers.create);
router.get('/products/edit/:id', adminControllers.updateView);
router.put('/products/edit/:id', productValidations, adminControllers.update);
router.delete('/products/delete/:id', adminControllers.delete);

module.exports = router;