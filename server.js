const express = require("express");
const dotenv = require("dotenv");
const { dbConnection } = require("./database/connect");
dotenv.config();
const { BASE_URL, FRONT_END_PORT, BACK_END_PORT } = process.env;
const authRouter = require("./routes/authRouter")
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
const cors = require("cors")
const corsConfig = {
	origin: [`${BASE_URL}:${FRONT_END_PORT}`],
	credentials: true,
};

const app = express();
app.use(cors(corsConfig));
app.use(express.json({ limit: "10mb" }));
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/auth", authRouter);

app.get("/users", (req, res) => {
	res.send("Hello World!");
});

app.listen(BACK_END_PORT, async () => {
	console.log(`Listening on Port : ${BACK_END_PORT}`);
	await dbConnection();
});