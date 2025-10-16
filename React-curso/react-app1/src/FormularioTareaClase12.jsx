//import React from 'react'
import {useEffect, useState} from 'react'
import './Borde.css'

/*
Tarea:
– Cree un componente con un formulario que permita crear nuevos posts utilizando
jsonplaceholder. Revise la documentación en https://jsonplaceholder.typicode.com/guide/
“creating a resource”.
*/

/*
Creating a resource

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

👇 Output

{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}

*/

export default function FormularioTareaClase12() {

    const [resultado, setResultado] = useState(null)
    const [formData, setFormData] = useState({
        title: "",
        body: "",
        userId: 1,
    })

    useEffect(() => {
        console.log("formData cambió:", formData);
    })

    function handleChange(event){
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setFormData(formData => ({
            ...formData,
            [inputName]: inputValue,
        }))
    }

function handleSubmit(event){
    event.preventDefault();//evita que se recargue la página
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: formData.title,
            body: formData.body,
            userId: formData.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => {
          if (!response.ok) throw new Error("Algo salió mal");
          else return response.json();
        })
        .then(json => setResultado(json))
        .catch((error) => setResultado("Error: " + error.message));
}

  return (
    <div className='estiloBorder'>Formulario Tarea Clase 12
        <p>Crear un post en jsonplaceholder</p>
        <p>{/* ✅ Mostrar los datos del objeto resultado */}
        {resultado && !resultado.error && (
            <div>
                <h4>✅ Post creado exitosamente:</h4>
                <p><strong>ID:</strong> {resultado.id}</p>
                <p><strong>Título:</strong> {resultado.title}</p>
                <p><strong>Cuerpo:</strong> {resultado.body}</p>
                <p><strong>Usuario ID:</strong> {resultado.userId}</p>
            </div>
        )}</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Título:</label>
            <br />
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
            <br />
            <label htmlFor="body">Cuerpo:</label>
            <br />
            <textarea id="body" name="body" value={formData.body} onChange={handleChange}></textarea>
            <br />
            <label htmlFor="userId">User ID:</label>
            <br />
            <input type="number" name="userId" value={formData.userId} onChange={handleChange} />
            <br />
            <button type='submit'>Crear Post</button>
        </form>
    </div>
  )
}
