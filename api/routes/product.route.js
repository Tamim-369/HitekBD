import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getOneProduct,
} from "../controller/product.controller.js";
import upload from "../utils/uploadFile.js";
import { createOrder } from "../controller/order.controller.js";

const router = Router();

router.get("/all", getAllProducts);
router.post("/create", upload.single("image"), createProduct);
router.get("/single/:id", getOneProduct);
router.post("/order", createOrder);
export default router;
