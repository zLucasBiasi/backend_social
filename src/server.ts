import "dotenv/config";
import cors from "cors";

import express from "express";
import defaulRoutes from "./routes/index";
import userRoutes from "./routes/user.routes";

const port = process.env.PORT;

export const app = express();

app.use(cors());

app.use(express.json());

app.use(defaulRoutes);
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
