import { useEffect, useState } from "react";
import "./Borde.css";

export default function Usuarios() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_KEY = "reqres-free-v1";
  const API_AUTORIZATION = "x-api-key";

  //acá no puedo tener efectos de lado

  useEffect(() => {
    console.log(page);
  });

  useEffect(() => {
    console.log("se llamó al callback de useEffect");
    fetch("https://reqres.in/api/users?page=" + page, {
      headers: { [API_AUTORIZATION]: API_KEY },
    })
      .then((response) => response.json())
      .then((json) => {
        setTotalPages(json.total_pages);
        setUsers(json.data);
      });
  }, [page]); //importante page para poder paginar

  function handlerClickListarUsuarios() {
    fetch("https://reqres.in/api/users?page=" + page, {
      headers: { [API_AUTORIZATION]: API_KEY },
    })
      .then((response) => response.json())
      .then((json) => setUsers(json.data));
  }

  function handlerClikBorrarUsuarios() {
    setUsers([]);
  }

  function handlerClickAnterior() {
    setPage((page) => page - 1);
  }

  function handlerClickSiguiente() {
    setPage((page) => page + 1);
  }

  return (
    <div className="estiloBorder">
      <>
        <h2>Componente Listar Usuarios - Clase 8</h2>
        <h4>
          consumiendo de la página https://jsonplaceholder.typicode.com/users
        </h4>

        <button onClick={handlerClickListarUsuarios}>Listar Usuarios</button>
        <button onClick={handlerClikBorrarUsuarios}>Borrar</button>

        <h4>Botones agregados para la Clase 10</h4>
        <button disabled={page === 1} onClick={handlerClickAnterior}>
          Anterior
        </button>
        <button disabled={page === totalPages} onClick={handlerClickSiguiente}>
          Siguiente
        </button>
        <hr />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}
