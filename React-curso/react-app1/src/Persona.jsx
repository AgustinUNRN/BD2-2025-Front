import React from 'react'
import './Borde.css'

export default function Persona({personas, titulo = "puedo setear un titulo por defecto"}) {

  //Clase5 Tarea
  //Cree una lista de personas, que incluya
  //nombre, apellido, telefono y direccion
  //y rendericelo utilizando una tabla html

  // const obj = {
  //   nombre: "Tony",
  //   apellido: "Stark"
  // };

 

  return (
    <div className="estiloBorder">
      <div><h2>Tarea clase 4 y 5</h2></div>
      <p>{titulo}</p>
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
