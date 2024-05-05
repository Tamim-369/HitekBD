import { Router } from "express";
import {
  createUser,
  findUser,
  getUser,
  updateUser,
  verifyUser,
} from "../controller/user.controller.js";
const router = Router();
router.post("/create", createUser);
router.post("/verify/:token", verifyUser);
router.post("/signin", getUser);
router.get("/find/:email", findUser);
router.put("/update/:id", updateUser);
export default router;
