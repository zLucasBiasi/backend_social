import express from "express";
import "dotenv/config";
import { router } from "../routes/routes";

export const server = express();
const port = process.env.PORT;

server.use(router);

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
