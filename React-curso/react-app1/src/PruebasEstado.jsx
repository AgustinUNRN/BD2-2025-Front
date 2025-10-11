import {useState} from 'react'
import './Borde.css'

/*Escriba un componente llamado PruebasEstado que tenga 3 botones. Uno para listar los posts
en una tabla obteniéndolos desde https://jsonplaceholder.typicode.com/posts. Otro para listar los
usuarios en otra tabla, obteniéndolos desde https://jsonplaceholder.typicode.com/users y
finamente un botón que permita limpiar ambas tablas.*/


export default function PruebasEstado() {

const [users, setUsers] = useState([]);

const [posts, setPosts] = useState([]);


function handlerOnClickListarPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setPosts(json));
}

function handlerOnClickListarUsuarios() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => setUsers(json));
}

function handlerOnClickLimpiarTablas() {
  setUsers([]);
  setPosts([]);
}

  return (
    <div className='estiloBorder'>
        <h2>Componente Pruebas de Estado - Tarea - Clase 8</h2>
        <h3>Los Posts se consumen de https://jsonplaceholder.typicode.com/posts</h3>
        <h3>Los Usuarios se consumen de https://jsonplaceholder.typicode.com/users</h3>
        <button onClick={handlerOnClickListarPosts}>Listar posts</button>
        <button onClick={handlerOnClickListarUsuarios}>Listar usuarios</button>
        <button onClick={handlerOnClickLimpiarTablas}>Limpiar tablas</button>

        <hr />
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
