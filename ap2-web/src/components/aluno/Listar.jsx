import "../../css/crud.css";
import AlunoService from "../../services/AlunoService";
import './listar.css'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Listar = () => {
  const [alunos, setAlunos] = useState([]);
  const [mostrarCores, setMostrarCores] = useState(false);
  console.log(mostrarCores)
  let somaNotas = 0;
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

  const renderizarAlunos = () => {

    alunos.map((aluno) => {
      somaNotas = somaNotas + aluno.ira;
      media = somaNotas / alunos.length;
    });

    const vetorResultado = alunos.map((aluno, index) => {
      return (
        <tr key={index}>
          <td className={mostrarCores ? aluno.ira >= media ? "passou" : "nao-passou" : ""}>{aluno._id}</td>
          <td className={mostrarCores ? aluno.ira >= media ? "passou" : "nao-passou" : ""}>{aluno.nome}</td>
          <td className={mostrarCores ? aluno.ira >= media ? "passou" : "nao-passou" : ""}>{aluno.curso}</td>
          <td className={mostrarCores ? aluno.ira >= media ? "passou" : "nao-passou" : ""}>{aluno.ira}</td>
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
      <h1>Listar Alunos</h1>
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
            {renderizarAlunos()}
            <th scope="col">Média IRA</th>
            <tr>
              <td className="text-light bg-success">{media.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <button
            onClick={() => {
              setMostrarCores((value) => !value)
            }}
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: 0 }}
          >
            Mostrar classificação
          </button>
      </div>
    </div>
  );
};

export default Listar;
