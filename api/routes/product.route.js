import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getOneProduct,
} from "../controller/product.controller.js";
import upload from "../utils/uploadFile.js";
import {
  changeOrderStatus,
  createOrder,
  getAllOrder,
  getOneOrder,
  getOrder,
} from "../controller/order.controller.js";

const router = Router();

router.get("/all", getAllProducts);
router.post("/create", upload.single("image"), createProduct);
router.get("/single/:id", getOneProduct);
router.post("/order", createOrder);
router.get("/getOneOrder/:id", getOneOrder);
router.get("/getOrder/:id", getOrder);
router.get("/getOrder", getAllOrder);
router.put("/setOrderStatus/:id", changeOrderStatus);
export default router;
