import { useState } from "react";
import "./Borde.css";

export default function Counter() {
  const [contador, setContador] = useState(0); //hook de estado

  function handlerClick() {
    setContador((contador) => contador + 1); //setContador es asíncrono;
    console.log(contador);
  }

  return (
    <div className="estiloBorder">
      <h2>Componente Contador clase 8</h2>
      <div>{contador}</div>
      <button onClick={handlerClick}>Clicleame</button>
    </div>
  );
}
