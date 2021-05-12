import express from "express";

import swaggerUi from "swagger-ui-express";
import { router } from "./routes";

import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json()); // para usar json no corpo da requisição

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(3333, () => console.log("Server is Running!"))