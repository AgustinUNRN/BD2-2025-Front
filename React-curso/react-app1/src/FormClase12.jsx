//import React from 'react'
import {useState} from 'react'
import './Borde.css'


export default function FormClase12() {
    const [resultado, setResultado] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        const nombre = event.target.fname.value
        const apellido = event.target.lname.value
        setResultado(`Hola ${nombre} ${apellido}, bienvenido al curso de React`)
    }

  return (
    <div className='estiloBorder'>FormClase12
        <p>{resultado}</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Nombre:</label>
            <br />
            <input type="text" id='fname' name='fname' />
            <br />
            <label htmlFor="lname">Apellido:</label>
            <br />
            <input type="text" id='lname' name='lname'/>
            <br />
            <button type="submit">Enviar</button> {/* ✅ Agregué el botón submit */}
        </form>
    </div>

  )
}
