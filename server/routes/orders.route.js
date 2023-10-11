const { getOrders, createIntent, updateOrder } = require("../controllers/orderr.controller");
const verifyToken = require("../middlewares/jwt");

const router = require("express").Router();

// router.post('/:id',verifyToken,createOrder)
router.get('/',verifyToken,getOrders)
router.post('/create-payment-intent/:gigId', verifyToken, createIntent)
router.put('/',verifyToken, updateOrder)

module.exports = router;