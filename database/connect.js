const Sequelize = require("sequelize")
const sequelize = new Sequelize('ecom', 'postgres', '2212', { host: "localhost", dialect: "postgres", });

const dbConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

module.exports = { sq: sequelize, dbConnection };