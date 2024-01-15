const User = require("../models/userModel")

class UserController {
	async getAllUsers(req, res) {
		const users = await User.findAll();
		return res.json(users)
	}

	async postUser(req, res) {
		const users = await User.findAll();
		return res.json(users)
	}

	async deleteUser(req, res) {
		const users = await User.findAll();
		return res.json(users)
	}

	async putUser(req, res) {
		const users = await User.findAll();
		return res.json(users)
	}
}

module.exports = new UserController;
