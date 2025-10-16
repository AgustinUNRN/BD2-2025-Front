import { useEffect, useState } from "react";
import "./Borde.css";

/*Escriba un componente llamado PruebasEstado que tenga 3 botones. Uno para listar los posts
en una tabla obteniéndolos desde https://jsonplaceholder.typicode.com/posts. Otro para listar los
usuarios en otra tabla, obteniéndolos desde https://jsonplaceholder.typicode.com/users y
finamente un botón que permita limpiar ambas tablas.*/

export default function PruebasEstado() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [usersLimit, setUsersLimit] = useState(0); // ✅ Usar límite en lugar de página
  const [postsLimit, setPostsLimit] = useState(0); // ✅ Usar límite en lugar de página
  const [maxUsers, setMaxUsers] = useState(0);
  const [maxPosts, setMaxPosts] = useState(0);

  useEffect(() => {
    console.log("se llamó al callback de useEffect + clase 9");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(Array.isArray(json) ? json : []);
        setMaxUsers(json.length); // ✅ Obtener máximo en el mismo fetch
        setUsersLimit(json.length);
      });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPosts(Array.isArray(json) ? json : []);
        setMaxPosts(json.length); // ✅ Obtener máximo en el mismo fetch
        setPostsLimit(json.length);
      });
  }, []);

  function handlerOnClickListarPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(Array.isArray(json) ? json : []))
      .catch((error) => console.error("Error:", error));
  }

  function handlerOnClickListarUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(Array.isArray(json) ? json : []))
      .catch((error) => console.error("Error:", error));
  }

  function handlerOnClickLimpiarTablas() {
    setUsers([]);
    setPosts([]);
    setUsersLimit(0); // ✅ Resetear límites
    setPostsLimit(0); // ✅ Resetear límites
    console.log("Limpiar tablas");
    console.log("Users:", usersLimit);
    console.log("Posts:", postsLimit);
  }

  function handlerClickAgregarUsers() {
    // Lógica para agregar un nuevo post o usuario
    const newLimit = usersLimit + 1;
    console.log("Agregando usuarios. Nuevo límite:", newLimit);
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=${newLimit}`)
      .then((response) => response.json())
      .then((json) => setUsers(json));
    setUsersLimit(newLimit);
  }

  function handlerClickSacarUsers() {
    // Lógica para eliminar un post o usuario
    const newLimit = usersLimit - 1;
    console.log("Sacando usuarios. Nuevo límite:", newLimit);
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=${newLimit}`)
      .then((response) => response.json())
      .then((json) => setUsers(json));
    setUsersLimit(newLimit);
  }

  function handlerClickAgregarPosts() {
    // Lógica para agregar un nuevo post o usuario
    const newLimit = postsLimit + 1;
    console.log("Agregando posts. Nuevo límite:", newLimit);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${newLimit}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
    setPostsLimit(newLimit);
  }

  function handlerClickSacarPosts() {
    // Lógica para eliminar un post o usuario
    const newLimit = postsLimit - 1;
    console.log("Sacando posts. Nuevo límite:", newLimit);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${newLimit}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
    setPostsLimit(newLimit);
  }

  return (
    <div className="estiloBorder">
      <h2>Componente Pruebas de Estado - Tarea - Clase 8</h2>
      <h3>
        Los Posts se consumen de https://jsonplaceholder.typicode.com/posts
      </h3>
      <h3>
        Los Usuarios se consumen de https://jsonplaceholder.typicode.com/users
      </h3>
      <button onClick={handlerOnClickListarPosts}>Listar posts</button>
      <button onClick={handlerOnClickListarUsuarios}>Listar usuarios</button>
      <button onClick={handlerOnClickLimpiarTablas}>Limpiar tablas</button>

      <h4>Tarea Clase 10</h4>
      <button
        disabled={usersLimit >= maxUsers}
        onClick={handlerClickAgregarUsers}
      >
        Agregar Usuarios a la lista
      </button>
      <button disabled={usersLimit <= 0} onClick={handlerClickSacarUsers}>
        Eliminar Usuarios de la lista
      </button>
      <button
        disabled={postsLimit >= maxPosts}
        onClick={handlerClickAgregarPosts}
      >
        Agregar Posts a la lista
      </button>
      <button disabled={postsLimit <= 0} onClick={handlerClickSacarPosts}>
        Eliminar de la lista de posts
      </button>

      <hr />
      <p>Tabla de Usuarios</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Tabla de Posts</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
