/*Escribir un componente Curso, que recibe por prop el nombre del curso y una lista de
estudiantes. El componente debe mostrar el nombre del curso y la lista de estudiantes en items
<ul> y <li>.*/

import React, { Component } from "react";
import "./Borde.css";

export default function Curso({ nombreCurso, estudiantes }) {
  return (
    <div className="estiloBorder">
      <h2>Tarea de clase 6, mostrar un curso y sus estudiantes</h2>
      <h3>Nombre del curso: </h3>
      {nombreCurso}
      <h3>Estudiantes:</h3>
      {estudiantes.map((elemento) => {
        return (
          <div key={elemento.id}>
            {elemento.nombre + " " + elemento.apellido}
          </div>
        );
      })}
    </div>
  );
}
