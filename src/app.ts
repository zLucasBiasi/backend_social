import express from "express";

import router from "./api/routes/routes";

export const app = express();

app.use(express.json());
app.use(router);
