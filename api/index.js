import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";
import adminRouter from "./routes/admin.route.js";
import bodyParser from "body-parser";
import path from "path";
import paymentRouter from "./routes/payment.route.js";
dotenv.config(); // Load environment variables from .env file

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client/dist")));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/pay", paymentRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
