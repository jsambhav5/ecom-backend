const User = require("../models/userModel")

class AuthController {
	async login(req, res) {
		const { email, password } = req.body;
		const users = await User.findAll({
			attributes: [
				'name',
				'email',
				'role'
			],
			where: {
				email, password
			}
		});
		if (!users.length)
			return res.json({ success: 0, message: "User Not Found" })
		return res.json({ success: 1, user: users[0] })
	}
}

module.exports = new AuthController;
