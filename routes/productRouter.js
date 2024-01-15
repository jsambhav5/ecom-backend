const { Router } = require("express");
const ProductController = require("../controllers/productController");

const productRouter = Router();

productRouter.get("/", ProductController.getAllProducts);
productRouter.post("/", ProductController.createProduct);
productRouter.delete("/:id", ProductController.deleteProduct);
productRouter.put("/", ProductController.updateProduct);

module.exports = productRouter