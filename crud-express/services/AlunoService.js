var AlunoModel = require("../models/AlunoModel");

class AlunoService {
  static recuperar(request, response) {
    AlunoModel.findById(request.params.id)
      .then((aluno) => {
        response.json(aluno);
      })
      .catch((error) => console.log(error));
  }

  static listar(request, response) {
    AlunoModel.find()
      .then((alunos) => {
        response.json(alunos);
      })
      .catch((error) => console.log(error));
  }

  static criar(request, response) {
    AlunoModel.create(request.body)
      .then((aluno) => {
        response.json(aluno);
      })
      .catch((error) => console.log(error));
  }

  static atualizar(request, response) {
    AlunoModel.findByIdAndUpdate(request.params.id, request.body)
      .then((aluno) => {
        response.json(aluno);
      })
      .catch((error) => console.log(error));
  }

  static delete(request, response) {
    AlunoModel.findByIdAndDelete(request.params.id)
      .then((professor) => {
        response.json(professor);
      })
      .catch((error) => console.log(error));
  }
}

module.exports = AlunoService;
