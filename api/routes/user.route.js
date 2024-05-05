import { Router } from "express";
import {
  createUser,
  findUser,
  getUser,
  verifyUser,
} from "../controller/user.controller.js";
const router = Router();
router.post("/create", createUser);
router.post("/verify/:token", verifyUser);
router.post("/signin", getUser);
router.get("/find/:email", findUser);
export default router;
