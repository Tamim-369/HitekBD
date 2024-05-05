import { Router } from "express";
import {
  createUser,
  getUser,
  verifyUser,
} from "../controller/user.controller.js";
const router = Router();
router.post("/create", createUser);
router.post("/verify/:token", verifyUser);
router.post("/signin", getUser);

export default router;
