import Router from "express";

const userRoutes = Router();
import {
  register,
  login,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";
import { verifyToken } from "../middleware/auth";

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.get("/user/:id", getUserById);
userRoutes.put("/", verifyToken, updateUser);
userRoutes.delete("/", verifyToken, deleteUser);

export default userRoutes;
