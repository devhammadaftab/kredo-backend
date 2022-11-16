const express = require("express");
const { getProducts, getProductsSingle } = require("../controllers/products");
const router  = express.Router();


router.route("/products").get(getProducts)
router.route("/products/:id").get(getProductsSingle)

module.exports = router
