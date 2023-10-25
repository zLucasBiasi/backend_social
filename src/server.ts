import "dotenv/config";
import cors from "cors";

import express from "express";
import defaulRoutes from "./routes/index";
import userRoutes from "./routes/user.routes";
import profileRoutes from "./routes/profile.routes";
import "express-async-errors";
import { ErrorHandleMiddleware } from "./middleware/errorHandleMiddleware";

const port = process.env.PORT;

export const app = express();

app.use(cors());

app.use(express.json());

app.use(defaulRoutes);
app.use(userRoutes);
app.use(profileRoutes);
app.use(ErrorHandleMiddleware);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
