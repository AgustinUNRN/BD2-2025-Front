import React from 'react'
import './Borde.css'

export default function Persona() {

  const obj = {
    nombre: "Tony",
    apellido: "Stark"
  };

  return (
    <div className="estiloBorder">{obj.nombre + " - " + obj.apellido}</div>
  )
}
