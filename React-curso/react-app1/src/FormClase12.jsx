//import React from 'react'
import {useEffect, useState} from 'react'
import './Borde.css'


export default function FormClase12() {
    const [resultado, setResultado] = useState("")
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
    })

    const API_KEY = 'reqres-free-v1'; 
    const API_AUTORIZATION = 'x-api-key'

    //fetch('https://reqres.in/api/users',{headers: {[API_AUTORIZATION]: API_KEY}})

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
        fetch('https://reqres.in/api/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                [API_AUTORIZATION]: API_KEY
            },
            body: JSON.stringify(formData),
        })
        .then((response) => {
          if (!response.ok) throw new Error("Algo salió mal");
          else return response.json();
        })
        .then(json => setResultado("Creado usuario con ID: " + json.id))
        .catch((error) => setResultado("Error: " + error.message));
        
    }

  return (
    <div className='estiloBorder'>FormClase12
        <p>{resultado}</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Nombre:</label>
            <br />
            <input type="text" id='fname' name='fname' value={formData.fname} onChange={handleChange} />
            <br />
            <label htmlFor="lname">Apellido:</label>
            <br />
            <input type="text" id='lname' name='lname' value={formData.lname} onChange={handleChange} />
            <br />
            <button type="submit">Enviar</button>
        </form>
    </div>

  )
}
