import AlunoService from "../../services/AlunoService";
import "../../css/crud.css";

import { useState } from "react";

const Criar = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [ira, setIra] = useState("");

  const handleInputNome = (event) => {
    setNome(event.target.value);
  };

  const handleInputCurso = (event) => {
    setCurso(event.target.value);
  };

  const handleInputIra = (event) => {
    setIra(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoAluno = { nome, curso, ira };
    AlunoService.postAlunoAxiosThenCatch(novoAluno, (data) => {
      
    });
  };

  return (
    <div className="page-content">
      <h1>Criar Aluno</h1>
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputNome">
            Nome
          </label>
          <input
            className="form-control"
            type="text"
            name="nome"
            id="inputNome"
            onChange={handleInputNome}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="inputCurso">
            Curso
          </label>
          <input
            className="form-control"
            type="text"
            name="curso"
            id="inputCurso"
            onChange={handleInputCurso}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputIra">
            IRA
          </label>
          <input
            className="form-control"
            type="text"
            name="ira"
            id="inputIra"
            onChange={handleInputIra}
          />
        </div>
        <div className="div-button-submit">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: 0 }}
          >
            Submeter
          </button>
        </div>
      </form>
    </div>
  );
};

export { Criar };
