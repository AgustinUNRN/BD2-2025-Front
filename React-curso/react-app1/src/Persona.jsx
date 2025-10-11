import React from 'react'
import './Borde.css'
import { PropTypes } from 'prop-types';

Persona.propTypes = {
  personas: PropTypes.array,
  titulo: PropTypes.string,
  handler: PropTypes.function,
};


export default function Persona({personas, titulo = "puedo setear un titulo por defecto", handler}) {

  //Clase5 Tarea
  //Cree una lista de personas, que incluya
  //nombre, apellido, telefono y direccion
  //y rendericelo utilizando una tabla html

  // const obj = {
  //   nombre: "Tony",
  //   apellido: "Stark"
  // };
  function handlerMouseOver()  {
    console.log("Mouse Over");
  }


  return (
    <div className="estiloBorder">

      <div><h2>Tarea clase 4 y 5</h2></div>
      <p>{titulo}</p>
      
      <a href="#" onClick={handler}>
        Click link! clase 7
      </a>

      <button 
      onMouseOver={(handlerMouseOver)}
      onClick={() => {console.log("Botón clickeado");}}>Click aquí clase 7</button>

      {personas.map((elemento) => {
          return (
            //key es importante para que React pueda identificar cada elemento de la lista
            //y optimizar el renderizado.
            <div key={elemento.id}>
              {elemento.nombre + 
              " - " + 
              elemento.apellido + 
              " - " + 
              elemento.telefono + 
              " - " + 
              elemento.direccion
              }
            </div>
          );
        })}
    </div>
  );
}
