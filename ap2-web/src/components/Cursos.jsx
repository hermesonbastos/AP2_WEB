import "../css/crud.css";
import AlunoService from "../services/AlunoService";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './aluno/listar.css';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cursos = () => {
  const [alunos, setAlunos] = useState([]);
  let media = 0;

  useEffect(() => {
    AlunoService.getAlunosFetchAsyncAwait((data) => setAlunos(data));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm(`Deseja excluir id = ${id}`)) {
      AlunoService.deleteAluno(id, (response) => {
        alert(response);
        const result = alunos.filter((aluno) => aluno._id !== id);
        setAlunos(result);
      });
    }
  };

  const cursosRepetidos = alunos.map((aluno) => {
      media = media + aluno.ira;
      return aluno.curso;
  });

  const cursos = [...new Set(cursosRepetidos)];

  console.log(cursos)

  const renderizarAlunos = (curso) => {

    const vetorResultado = alunos.map((aluno, index) => {

      if(curso === aluno.curso )return (
        <tr key={index}>
          <td className={aluno.ira >= media/alunos.length ? "passou" : ""}>{aluno._id}</td>
          <td className={aluno.ira >= media/alunos.length ? "passou" : ""}>{aluno.nome}</td>
          <td className={aluno.ira >= media/alunos.length ? "passou" : ""}>{aluno.curso}</td>
          <td className={aluno.ira >= media/alunos.length ? "passou" : ""}>{aluno.ira}</td>
          <td>
            <div className="button-content">
              <Link
                to={`/aluno/editar/${aluno._id}`}
                className="btn btn-primary"
              >
                Editar
              </Link>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(aluno._id)}
              >
                Apagar
              </button>
            </div>
          </td>
        </tr>
      );
    });

    return vetorResultado;
  };

  return (
    <div className="page-content">
      <h1>Listar Alunos por Curso</h1>
      <div className="table-content">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">UUID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Ira</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso) => {
              return (
                <>
                  <th scope="col">{curso}</th>
                  {renderizarAlunos(curso)}
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cursos;
