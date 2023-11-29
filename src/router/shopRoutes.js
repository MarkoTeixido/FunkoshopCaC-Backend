const express = require('express');
const router = express.Router();
const shopControllers = require ('../controllers/shopControllers');



router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.id);
router.post('/item/:id/add', shopControllers.item );
router.get('/cart', shopControllers.cart);
router.post ('/cart', shopControllers.checkout);

module.exports = router;
