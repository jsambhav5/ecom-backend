const { Router } = require("express");
const UserController = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", UserController.getAllUsers);

module.exports = userRouter