import React, { Component } from 'react'
import './Borde.css'

function handlerClick() {
    alert("Click en Popup clase 7");
}

export default class Popup extends Component {
  render() {
    return (
      <div className='estiloBorder'>
        <h2>Componente de Clase - Popup</h2>
        <h4>Escriba un componente llamado Popup, que muestre un botón y al clickearlo muestre un
mensaje. Para el mensaje utilice alert(). Éste componente recibe el mensaje por prop.</h4>
        <button onClick={handlerClick}>Mostrar Popup</button>
      </div>
    )
  }
}
