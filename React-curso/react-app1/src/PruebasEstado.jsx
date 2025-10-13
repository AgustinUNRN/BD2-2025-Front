import {useEffect,useState} from 'react'
import './Borde.css'

/*Escriba un componente llamado PruebasEstado que tenga 3 botones. Uno para listar los posts
en una tabla obteniéndolos desde https://jsonplaceholder.typicode.com/posts. Otro para listar los
usuarios en otra tabla, obteniéndolos desde https://jsonplaceholder.typicode.com/users y
finamente un botón que permita limpiar ambas tablas.*/


export default function PruebasEstado() {

const [users, setUsers] = useState([]);
const [posts, setPosts] = useState([]);
const [totalPagesUsers, setTotalPagesUsers] = useState(1);
const [totalPagesPosts, setTotalPagesPosts] = useState(1);
const [pageUser, setPageUser] = useState(1);
const [pagePost, setPagePost] = useState(1);

useEffect(() => {
  console.log('se llamó al callback de useEffect + clase 9');
  fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=10')
        .then((response) => response.json())
        .then((json) =>{ setUsers(json); const totalPageU=json.length; setTotalPagesUsers(totalPageU), setPageUser(totalPageU),setTotalPagesUsers(totalPageU);});
  fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
    .then((response) => response.json())
    .then((json) =>{ setPosts(json); const totalPageP=json.length; setTotalPagesPosts(totalPageP), setPagePost(totalPageP),setTotalPagesPosts(totalPageP);});
}, []);

function handlerOnClickListarPosts() {
   fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) =>{ setPosts(json); const totalPageP=json.length; setTotalPagesPosts(totalPageP), setPagePost(totalPageP),setTotalPagesPosts(totalPageP);});

    console.log("pagePost= "+pagePost);
}

function handlerOnClickListarUsuarios() {
   fetch('https://jsonplaceholder.typicode.com/users')
       .then((response) => response.json())
       .then((json) =>{ setUsers(json); const totalPageU=json.length; setTotalPagesUsers(totalPageU), setPageUser(totalPageU),setTotalPagesUsers(totalPageU);});
    console.log("pageUser= "+pageUser);
}

function handlerOnClickLimpiarTablas() {
  setPageUser(0);
  setPagePost(0);
  setUsers([]);
  setPosts([]);
  console.log("pageUser= "+pageUser);
  console.log("pagePost= "+pagePost);
}

function handlerClickAgregarUsers() {
  // Lógica para agregar un nuevo post o usuario
  fetch('https://jsonplaceholder.typicode.com/users?_limit='+pageUser)
    .then((response) => response.json())
    .then((json) => setUsers(json));
  setPageUser((pageUser) => pageUser + 1);
  console.log("pageUser= "+pageUser);
}

function handlerClickSacarUsers() {
  // Lógica para eliminar un post o usuario
  fetch('https://jsonplaceholder.typicode.com/users?_limit='+(  pageUser - 1))
    .then((response) => response.json())
    .then((json) => setUsers(json));
  setPageUser((pageUser) => pageUser - 1);
  console.log("PageUser= "+pageUser);
}

function handlerClickAgregarPosts() {
  // Lógica para agregar un nuevo post o usuario
  fetch('https://jsonplaceholder.typicode.com/posts?_limit='+pagePost)
    .then((response) => response.json())
    .then((json) => setPosts(json));
  setPagePost((pagePost) => pagePost + 1);
  console.log("PagePost= "+pagePost);
}

function handlerClickSacarPosts() {
  // Lógica para eliminar un post o usuario
  fetch('https://jsonplaceholder.typicode.com/posts?_limit='+(  pagePost - 1))
    .then((response) => response.json())
    .then((json) => setPosts(json));
  setPagePost((pagePost) => pagePost - 1);
  console.log("PagePost= "+pagePost);
}

  return (
    <div className='estiloBorder'>
        <h2>Componente Pruebas de Estado - Tarea - Clase 8</h2>
        <h3>Los Posts se consumen de https://jsonplaceholder.typicode.com/posts</h3>
        <h3>Los Usuarios se consumen de https://jsonplaceholder.typicode.com/users</h3>
        <button onClick={handlerOnClickListarPosts}>Listar posts</button>
        <button onClick={handlerOnClickListarUsuarios}>Listar usuarios</button>
        <button onClick={handlerOnClickLimpiarTablas}>Limpiar tablas</button>

        <h4>Tarea Clase 10</h4>
        <button disabled={pageUser === totalPagesUsers} onClick={handlerClickAgregarUsers}>Agregar Usuarios a la lista</button>
        <button disabled={pageUser === 0} onClick={handlerClickSacarUsers}>Eliminar Usuarios de la lista</button>
        <button disabled={pagePost === totalPagesPosts} onClick={handlerClickAgregarPosts}>Agregar Posts a la lista</button>
        <button disabled={pagePost === 0} onClick={handlerClickSacarPosts}>Eliminar de la lista de posts</button>

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
  )
}
