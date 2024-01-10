const { DataTypes } = require('sequelize');
const { sq } = require("../database/connect")

const User = sq.define('User', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	role: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	tableName: 'users',
	timestamps: false
});

module.exports = User;
