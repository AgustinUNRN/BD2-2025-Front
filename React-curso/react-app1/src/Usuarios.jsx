import {useEffect, useState} from 'react'
import './Borde.css'

export default function Usuarios() {

  const [users, setUsers] = useState([]);

  //acá no puedo tener efectos de lado

  useEffect(() => {
    console.log('se llamó al callback de useEffect');
    fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((json) => setUsers(json));
  }, []);

  function handlerClickListarUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }

  function handlerClikBorrarUsuarios() {
    setUsers([]);
  }


  return (
    <div className='estiloBorder'>
      <>
        <h2>Componente Listar Usuarios - Clase 8</h2>
        <h4>consumiendo de la página https://jsonplaceholder.typicode.com/users</h4>

        <button onClick={handlerClickListarUsuarios}>Listar Usuarios</button>
        <button onClick={handlerClikBorrarUsuarios}>Borrar</button>
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
      </>
    </div>
  )
}
