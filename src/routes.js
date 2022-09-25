const express = require("express");
const ProdutoController = require("./controllers/ProdutoController");

const routes = express.Router();

////////////////////////////////////////////////////////////////CRUD - PRODUTOS////////////////////////////////////////////////////////////////
routes.post("/produtos", ProdutoController.create);
routes.get("/produtos", ProdutoController.readAll);
routes.get("/produtos/:id", ProdutoController.read);
routes.put("/produtos/:id", ProdutoController.update);
routes.delete("/produtos/:id", ProdutoController.delete);
////////////////////////////////////////////////////////////////CRUD - PRODUTOS////////////////////////////////////////////////////////////////
module.exports = routes;
