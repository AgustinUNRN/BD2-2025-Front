import React from 'react'
import './Borde.css'

export default function Persona() {

  //Clase5 Tarea
  //Cree una lista de personas, que incluya
  //nombre, apellido, telefono y direccion
  //y rendericelo utilizando una tabla html

  // const obj = {
  //   nombre: "Tony",
  //   apellido: "Stark"
  // };

  const personas = [
    { id: 1, nombre: "Steve", apellido: "Rogers", telefono: "123-456-7890", direccion: "Avengers Tower" },
    { id: 2, nombre: "Natasha", apellido: "Romanoff", telefono: "987-654-3210", direccion: "Avengers Compound" },
    { id: 3, nombre: "Bruce", apellido: "Banner", telefono: "555-555-5555", direccion: "Stark Tower" },
    { id: 4, nombre: "Thor", apellido: "Odinson", telefono: "111-222-3333", direccion: "Asgard" },
    { id: 5, nombre: "Clint", apellido: "Barton", telefono: "444-444-4444", direccion: "Avengers Compound" },
    { id: 6, nombre: "Wanda", apellido: "Maximoff", telefono: "666-777-8888", direccion: "Avengers Compound" },
  ];

  return (
    <div className="estiloBorder">
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
