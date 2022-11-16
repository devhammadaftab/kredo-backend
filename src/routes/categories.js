const express = require("express");
const { getCategories, getProductOfCategories } = require("../controllers/categories");
const router  = express.Router();

router.route("/category").get(getCategories)
router.route("/category/:id").get(getProductOfCategories)

module.exports = router