const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/productos', adminControllers.index);
router.get('/productos/create', adminControllers.createView);
router.post('/productos/create', adminControllers.create);
router.get('/productos/:id/edit/', adminControllers.updateView);
router.put('/productos/:id', adminControllers.update);
router.delete('/productos/:id', adminControllers.delete);

module.exports = router;