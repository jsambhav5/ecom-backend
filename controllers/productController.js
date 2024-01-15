const Product = require("../models/productModel")

class ProductController {
	async getAllProducts(req, res) {
		try {
			const products = await Product.findAll();
			return res.json(products)
		} catch (error) {
			console.log(error);
			return res.json({ success: 0, message: error })
		}
	}

	async createProduct(req, res) {
		try {
			const { user_id, name, price, in_stock } = req.body;
			const result = await Product.create({ user_id, name, price, in_stock }, { fields: ['user_id', 'name', 'price', 'in_stock'] });
			return res.json({ success: 1, id: result.id })
		} catch (error) {
			console.log(error);
			return res.json({ success: 0, message: error })
		}
	}

	async deleteProduct(req, res) {
		try {
			const { id } = req.params;
			const result = await Product.destroy({ where: { id } });
			if (!result)
				throw "Product Doesn't Exist";
			return res.json({ success: 1, message: "Product Deleted" })
		} catch (error) {
			console.log(error);
			return res.json({ success: 0, message: error })
		}
	}

	async updateProduct(req, res) {
		try {
			const { id, user_id, name, price, in_stock } = req.body;
			const result = await Product.update({
				user_id,
				name,
				price,
				in_stock
			}, {
				fields: ['user_id', 'name', 'price', 'in_stock'],
				where: { id }
			});

			if (!result[0])
				throw "Product Doesn't Exist";
			return res.json({ success: 1, message: "Product Updated Successfully" })
		} catch (error) {
			console.log(error);
			return res.json({ success: 0, message: error })
		}
	}
}

module.exports = new ProductController;
