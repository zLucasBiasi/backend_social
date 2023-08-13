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

router.get("/", home);
router.post("/register", register);
router.post("/login", login);
router.get("/user/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
