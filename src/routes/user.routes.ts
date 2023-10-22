import Router from "express";

const userRoutes = Router();
import { UserController } from "../controllers/user.controller";
import { AuthMiddleware } from "../middleware/auth.middleware";

userRoutes.post("/register", UserController.register);
userRoutes.post("/login", UserController.login);

userRoutes.put("/", AuthMiddleware.verifyToken, UserController.updateUser);
userRoutes.delete("/", AuthMiddleware.verifyToken, UserController.deleteUser);

export default userRoutes;
