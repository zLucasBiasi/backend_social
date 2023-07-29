import express from "express";
import "dotenv/config";

import { server } from "./api/server/server";

const app = express();

app.use(server);
