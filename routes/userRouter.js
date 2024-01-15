const { Router } = require("express");
const UserController = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", UserController.getAllUsers);
userRouter.post("/signup", UserController.signUp);

module.exports = userRouter