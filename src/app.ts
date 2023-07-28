import * as express from "express";
import router from "./api/routes/routes";

const app = express();
const port = 3000;

// Configurações do Express e middleware (se necessário)

// Conectar as rotas

app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
