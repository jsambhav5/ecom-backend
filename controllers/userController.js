const User = require("../models/userModel")

class UserController {
	async getAllUsers(req, res) {
		const users = await User.findAll();
		return res.json(users)
	}
}

module.exports = new UserController;
