import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
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
router.post("/create", upload.array("images"), createProduct); // Unlimited images
router.put("/update/:id", upload.array("images"), updateProduct); // Unlimited images
router.get("/single/:id", getOneProduct);
router.post("/order", createOrder);
router.get("/getOneOrder/:id", getOneOrder);
router.get("/getOrder/:id", getOrder);
router.get("/getOrder", getAllOrder);
router.put("/setOrderStatus/:id", changeOrderStatus);
router.delete("/delete/:id", deleteProduct);
export default router;
