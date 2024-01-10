const { Router } = require("express");
const ProductController = require("../controllers/productController");

const productRouter = Router();

productRouter.get("/", ProductController.getAllProducts);

module.exports = productRouter