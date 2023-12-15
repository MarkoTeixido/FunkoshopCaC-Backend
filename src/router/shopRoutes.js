const express = require('express');
const router = express.Router();
const shopControllers = require ('../controllers/shopControllers');

router.get('/', shopControllers.shopView);
router.get('/item/:id', shopControllers.idView);
router.post('/item/:id/add', shopControllers.itemView);
router.get('/cart', shopControllers.cartView);
router.post ('/cart', shopControllers.checkoutView);

module.exports = router;
