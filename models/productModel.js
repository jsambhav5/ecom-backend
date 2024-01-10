const { DataTypes } = require('sequelize');
const { sq } = require("../database/connect")

const Product = sq.define('Product', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	user_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	in_stock: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
}, {
	tableName: 'products',
	timestamps: false
});

module.exports = Product;
