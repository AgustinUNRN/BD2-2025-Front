import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Persona from "./Persona.jsx";
import TareaClase3 from "./TareaClase3.jsx";
import "./Borde.css";
import Curso from "./Curso.jsx";
import Popup from "./Popup.jsx";
import Counter from "./Counter.jsx";
import Usuarios from "./Usuarios.jsx";
import PruebasEstado from "./PruebasEstado.jsx";
import Usuarios2ReactQuery from "./Usuarios2ReactQuery.jsx";
import FormClase12 from "./FormClase12.jsx";
import FormularioTareaClase12 from "./FormularioTareaClase12.jsx";

function App() {
  const estudiantes = [
    { id: 1, nombre: "Agustin", apellido: "Gonzalez" },
    { id: 2, nombre: "Juan", apellido: "Perez" },
    { id: 3, nombre: "Maria", apellido: "Gomez" },
    { id: 4, nombre: "Ana", apellido: "Lopez" },
  ];

  //corresponde a la tarea de la clase 6
  const personas = [
    {
      id: 1,
      nombre: "Steve",
      apellido: "Rogers",
      telefono: "123-456-7890",
      direccion: "Avengers Tower",
    },
    {
      id: 2,
      nombre: "Natasha",
      apellido: "Romanoff",
      telefono: "987-654-3210",
      direccion: "Avengers Compound",
    },
    {
      id: 3,
      nombre: "Bruce",
      apellido: "Banner",
      telefono: "555-555-5555",
      direccion: "Stark Tower",
    },
    {
      id: 4,
      nombre: "Thor",
      apellido: "Odinson",
      telefono: "111-222-3333",
      direccion: "Asgard",
    },
  ];

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState("");

  const MIN_VALUE = -100;
  const MAX_VALUE = 100;

  const increment = () => {
    const newValue = count + step;
    if (newValue <= MAX_VALUE) {
      setCount(newValue);
      addToHistory(`+${step}`);
      setMessage("");
    } else {
      setMessage(`¡No se puede superar el máximo de ${MAX_VALUE}!`);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const decrement = () => {
    const newValue = count - step;
    if (newValue >= MIN_VALUE) {
      setCount(newValue);
      addToHistory(`-${step}`);
      setMessage("");
    } else {
      setMessage(`¡No se puede ir por debajo del mínimo de ${MIN_VALUE}!`);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const reset = () => {
    setCount(0);
    addToHistory("Reset");
    setMessage("Contador reiniciado");
    setTimeout(() => setMessage(""), 2000);
  };

  const addToHistory = (action) => {
    const timestamp = new Date().toLocaleTimeString();
    setHistory((prev) => [
      { action, value: count, timestamp, id: Date.now() },
      ...prev.slice(0, 4), // Mantener solo los últimos 5 registros
    ]);
  };

  function handlerClick(e) {
    e.preventDefault(); //Evita que el link recargue la página
    console.log("Desde app.jsx");
  }

  return (
    <>
      <FormularioTareaClase12 />
      <FormClase12 />
      <Usuarios2ReactQuery />
      <PruebasEstado />
      <Usuarios />
      <Counter />
      <Popup />
      <Persona
        personas={personas}
        titulo="Lista de Personas clase 6"
        handler={handlerClick}
      />
      <TareaClase3 />
      <Curso nombreCurso="React Básico" estudiantes={estudiantes} />

      <div className="estiloBorder">
        <b>Hola Mundo ! mi primer proyecto en React!</b>

        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div>
          <h1>Contador Interactivo</h1>

          {/* Display del contador */}
          <div className="counter-display">
            <h2
              style={{
                fontSize: "3rem",
                color: count > 0 ? "#4CAF50" : count < 0 ? "#f44336" : "#333",
                margin: "20px 0",
              }}
            >
              {count}
            </h2>

            {/* Barra de progreso */}
            <div
              style={{
                width: "300px",
                height: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "6px",
                margin: "15px auto",
                overflow: "hidden",
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                style={{
                  width: `${
                    Math.abs((count - MIN_VALUE) / (MAX_VALUE - MIN_VALUE)) *
                    100
                  }%`,
                  height: "100%",
                  background:
                    count > 0
                      ? "linear-gradient(90deg, #4CAF50, #69f0ae)"
                      : count < 0
                      ? "linear-gradient(90deg, #f44336, #ff6b6b)"
                      : "linear-gradient(90deg, #666, #999)",
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              ></div>
            </div>

            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.7)",
                margin: "10px 0",
              }}
            >
              Rango: {MIN_VALUE} a {MAX_VALUE}
            </p>
          </div>

          {/* Mensaje de validación */}
          {message && (
            <div
              style={{
                padding: "12px",
                margin: "15px 0",
                backgroundColor: message.includes("No se puede")
                  ? "rgba(244, 67, 54, 0.15)"
                  : "rgba(76, 175, 80, 0.15)",
                color: message.includes("No se puede") ? "#ff6b6b" : "#69f0ae",
                border: `1px solid ${
                  message.includes("No se puede")
                    ? "rgba(244, 67, 54, 0.3)"
                    : "rgba(76, 175, 80, 0.3)"
                }`,
                borderRadius: "8px",
                fontWeight: "bold",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              {message}
            </div>
          )}

          {/* Controles principales */}
          <div className="counter-controls" style={{ marginBottom: "20px" }}>
            <button
              onClick={decrement}
              disabled={count - step < MIN_VALUE}
              style={{
                padding: "10px 20px",
                margin: "0 5px",
                backgroundColor: count - step < MIN_VALUE ? "#ccc" : "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: count - step < MIN_VALUE ? "not-allowed" : "pointer",
                opacity: count - step < MIN_VALUE ? 0.6 : 1,
              }}
            >
              - {step}
            </button>

            <button
              onClick={reset}
              style={{
                padding: "10px 20px",
                margin: "0 5px",
                backgroundColor: "#ff9800",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Reset
            </button>

            <button
              onClick={increment}
              disabled={count + step > MAX_VALUE}
              style={{
                padding: "10px 20px",
                margin: "0 5px",
                backgroundColor: count + step > MAX_VALUE ? "#ccc" : "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: count + step > MAX_VALUE ? "not-allowed" : "pointer",
                opacity: count + step > MAX_VALUE ? 0.6 : 1,
              }}
            >
              + {step}
            </button>
          </div>

          {/* Control del paso */}
          <div className="step-control" style={{ marginBottom: "20px" }}>
            <label htmlFor="step-input" style={{ marginRight: "10px" }}>
              Paso:
            </label>
            <input
              id="step-input"
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value) || 1)}
              min="1"
              max="100"
              style={{
                padding: "5px",
                width: "60px",
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
            />
          </div>

          {/* Información del estado */}
          <div className="counter-info" style={{ marginBottom: "20px" }}>
            <p>
              Valor actual: <strong>{count}</strong>
            </p>
            <p>
              Es:{" "}
              <strong>
                {count === 0 ? "Cero" : count > 0 ? "Positivo" : "Negativo"}
              </strong>
            </p>
            <p>
              Es: <strong>{count % 2 === 0 ? "Par" : "Impar"}</strong>
            </p>
          </div>

          {/* Historial */}
          {history.length > 0 && (
            <div
              className="history"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "15px",
                borderRadius: "8px",
                marginTop: "20px",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                style={{
                  color: "inherit",
                  marginTop: "0",
                  marginBottom: "15px",
                }}
              >
                Historial de cambios:
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {history.map((entry) => (
                  <li
                    key={entry.id}
                    style={{
                      margin: "8px 0",
                      padding: "10px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      color: "inherit",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <strong style={{ color: "#64b5f6" }}>
                      {entry.timestamp}
                    </strong>
                    :
                    <span style={{ color: "#81c784", marginLeft: "5px" }}>
                      {entry.action}
                    </span>
                    <br />
                    <small style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      (valor anterior: {entry.value})
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div></div>
      </div>
    </>
  );
}

export default App;
