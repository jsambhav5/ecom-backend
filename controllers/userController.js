const User = require("../models/userModel")

class UserController {
	async getAllUsers(req, res) {
		const users = await User.findAll();
		return res.json(users)
	}

	async signUp(req, res) {
		try {
			const { name, email, password, role } = req.body;
			const result = await User.create({ name, email, password, role }, { fields: ['name', 'email', 'password', 'role'] });
			return res.json({ success: 1, id: result.id })
		} catch (error) {
			console.log(error);
			return res.json({ success: 0, message: error })
		}
	}
}

module.exports = new UserController;
