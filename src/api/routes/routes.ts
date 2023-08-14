import Router from "express";
const router = Router();
import {
  register,
  login,
  getUserById,
  updateUser,
  deleteUser,
  home,
} from "../controllers/UserController";
import { verifyToken } from "../middleware/auth";

router.get("/", home);
router.post("/register", register);
router.post("/login", login);
router.get("/user/:id", getUserById);
router.put("/", verifyToken, updateUser);
router.delete("/", verifyToken, deleteUser);

export default router;
