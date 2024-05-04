import { Router } from "express";
import { getAllProducts } from "../controller/product.controller.js";
const router = Router();
router.get("/all", getAllProducts);

export default router;
