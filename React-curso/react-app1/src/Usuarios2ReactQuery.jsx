// import {useEffect, useState} from 'react'
import React from 'react'
import './Borde.css'
import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function Usuarios2ReactQuery() {

//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

  const [page, setPage] = React.useState(1); // O importar React
  const [totalPages, setTotalPages] = React.useState(1);
  const [enableList, setEnableList] = React.useState(false);

  const queryClient = useQueryClient(); // ✅ Obtener la instancia
    

  const API_KEY = 'reqres-free-v1'; 
  const API_AUTORIZATION = 'x-api-key'

  //acá no puedo tener efectos de lado

  /*useEffect(() => {
    console.log(page);
  });

  useEffect(() => {
    console.log('se llamó al callback de useEffect');
    fetch('https://reqres.in/api/users?page='+page,{headers: {[API_AUTORIZATION]: API_KEY}})
          .then((response) => response.json())
          .then((json) => {
            setTotalPages(json.total_pages);
            setUsers(json.data);
          });
  }, [page]); //importante page para poder paginar

  */
 function conDelay(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  const query = useQuery({
    queryKey: ['usuarios', page],
    queryFn: () => 
        conDelay(1000).then(() =>
        fetch('https://reqres.in/api/users?page='+page,{headers: {[API_AUTORIZATION]: API_KEY}})
          .then((response) => response.json())
          .then((json) => {
            setTotalPages(json.total_pages);
            return json.data;
          })
        ),
        enabled: enableList, // ✅ Esto evita la ejecución automática
    //staleTime: 10000, // 10 segundos
  })

  function handlerClickListarUsuarios() {//Tarea clase 11
    query.refetch();
    setEnableList(true);
  }

  function handlerClikBorrarUsuarios() { //Tarea clase 11
    //borrar los datos en React Query
    setEnableList(false); // ✅ Primero deshabilitar
    //Eliminar queries específicas del cache
    queryClient.removeQueries(['usuarios']); // ✅ Usar queryClient en lugar de query.remove
    //limpiar todo el cache
    queryClient.clear();
    setPage(1);
    setTotalPages(1);
  }

  function handlerClickAnterior() {
    setPage((page) => page - 1);
  }

  function handlerClickSiguiente() {
    setPage((page) => page + 1);
  }


  /* Algunas funcionalidades adicionales de React Query:

  // Eliminar queries específicas del cache
  queryClient.removeQueries(['usuarios']);

  // Limpiar todo el cache
  queryClient.clear();

  // Obtener datos del cache sin hacer fetch
  const cachedData = queryClient.getQueryData(['usuarios', 1]);

  // Marca queries como "obsoletas" y las refresca automáticamente
  queryClient.invalidateQueries(['usuarios']);

  // Refrescar múltiples queries relacionadas
  queryClient.invalidateQueries(['posts']);

  // Actualizar datos en cache sin hacer fetch
  queryClient.setQueryData(['usuarios', 1], (oldData) => {
    return [...oldData, newUser];
  });

  // Cargar la próxima página antes de que el usuario la pida
  queryClient.prefetchQuery({
    queryKey: ['usuarios', page + 1],
    queryFn: () => fetchUsers(page + 1)
  });

   */

  return (
    <div className='estiloBorder'>
      <>
        <h2>Componente Listar Usuarios con ReactQuery- Clase 11</h2>
        <h4>consumiendo de la página https://jsonplaceholder.typicode.com/users</h4>

        <button onClick={handlerClickListarUsuarios}>Listar Usuarios</button>
        <button onClick={handlerClikBorrarUsuarios}>Borrar</button>

        <button disabled={page === 1} onClick={handlerClickAnterior}>Anterior</button>
        <button disabled={page === totalPages} onClick={handlerClickSiguiente}>Siguiente</button>
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
            {query.isLoading && (
              <tr>
                <td colSpan="5">Cargando...</td>
              </tr>
            )}
            {query.data?.map((user) => (
               <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    <img 
                      src={user.avatar} 
                      alt={`${user.first_name} ${user.last_name}`}
                      style={{width: '50px', height: '50px', borderRadius: '50%'}}
                    />
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  )
}
