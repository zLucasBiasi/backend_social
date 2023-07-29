import { Router } from "express";
export const router = Router();
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  home,
} from "../controllers/UserController";

router.get("/", home);
router.get("/oi", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
