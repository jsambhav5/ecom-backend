const Product = require("../models/productModel")

class ProductController {
	async getAllProducts(req, res) {
		const products = await Product.findAll();
		return res.json(products)
	}
}

module.exports = new ProductController;
