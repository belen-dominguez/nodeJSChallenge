const express = require("express");
const router = express.Router();
const shopControllers = require("../controllers/shopController");

router.get("/", shopControllers.shop);
router.get("/item/:id", shopControllers.shopItem);
router.post("/item/:id/add", shopControllers.shopItemAdd);
router.get("/cart", shopControllers.cart);
router.post("/cart", shopControllers.checkout);
module.exports = router;
