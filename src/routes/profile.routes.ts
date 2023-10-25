import { Router } from "express";
import { profileController } from "../controllers/profile.controllers";
import { AuthMiddleware } from "../middleware/auth.middleware";

const profileRoutes = Router();

profileRoutes.post(
  "/publish",
  AuthMiddleware.verifyToken,
  profileController.publish
);

export default profileRoutes;
