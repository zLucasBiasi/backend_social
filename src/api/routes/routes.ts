import Router from "express";
const router = Router();
import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  home,
} from "../controllers/UserController";

router.get("/", home);
router.post("/createUser", createUser);
router.get("/user/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
