import Router from "express";

import { home } from "../controllers/default.controllers";

const defaulRoutes = Router();

defaulRoutes.get("/", home);

export default defaulRoutes;
