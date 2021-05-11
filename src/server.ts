import express from "express";

import { router } from "./routes";

const app = express();
app.use(express.json()); // para usar json no corpo da requisição

app.use(router);

app.listen(3333, () => console.log("Server is Running!"))