import Router from "express";

import { defaultController } from "../controllers/default.controllers";

const defaulRoutes = Router();

defaulRoutes.get("/", defaultController.home);

export default defaulRoutes;
