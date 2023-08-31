import express from "express";
import cors from "cors";
import router from "./api/routes/routes";

export const app = express();

app.use(cors());

app.use(express.json());
app.use(router);
