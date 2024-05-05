import { Router } from "express";
import {
  createUser,
  findUser,
  getUser,
  resetPassword,
  resetPasswordFinish,
  updateUser,
  verifyCode,
  verifyUser,
} from "../controller/user.controller.js";
const router = Router();
router.post("/create", createUser);
router.post("/verify/:token", verifyUser);
router.post("/signin", getUser);
router.get("/find/:email", findUser);
router.put("/update/:id", updateUser);
router.post("/reset/:email", resetPassword);
router.post("/checkCode", verifyCode);
router.post("/resetPassword/:email", resetPasswordFinish);
export default router;
