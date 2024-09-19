var express = require("express");
var router = express.Router();

const AlunoService = require("../services/AlunoService");

router.get("/listar", (request, response, next) => {
  AlunoService.listar(request, response);
});

router.get("/recuperar/:id", (request, response, next) => {
  AlunoService.recuperar(request, response);
});

router.post("/criar", (request, response, next) => {
  AlunoService.criar(request, response);
});

router.put("/atualizar/:id", (request, response, next) => {
  AlunoService.atualizar(request, response);
});

router.delete("/apagar/:id", (request, response, next) => {
  AlunoService.delete(request, response);
});

module.exports = router;
