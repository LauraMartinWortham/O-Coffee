const express = require("express");
const mainController = require("./controllers/mainController");
const productController = require("./controllers/productController");


const router = express.Router();

router.get("/", mainController.home);

router.get("/catalogue", productController.catalog);
router.get("/catalogue/product/:id", productController.productPage);


module.exports = router;