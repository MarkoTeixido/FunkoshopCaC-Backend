const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/products', adminControllers.index);
router.get('/products/create', adminControllers.createView);
router.post('/products/create', adminControllers.create);
router.get('/products/edit/:id', adminControllers.updateView);
router.put('/products/edit/:id', adminControllers.update);
router.delete('/products/delete/:id', adminControllers.delete);

module.exports = router;