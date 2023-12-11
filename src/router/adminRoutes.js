const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/productos', adminControllers.index);
router.get('/productos/create', adminControllers.createView);
router.post('/productos/create', adminControllers.create);
router.get('/productos/edit/:id', adminControllers.updateView);
router.put('/productos/edit/:id', adminControllers.update);
router.delete('/productos/delete/:id', adminControllers.delete);

module.exports = router;