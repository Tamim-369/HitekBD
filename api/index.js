import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";
import bodyParser from "body-parser";
import path from "path";
dotenv.config(); // Load environment variables from .env file

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("MongoDB connected alhamdulillah");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/dist")));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
