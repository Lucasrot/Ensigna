/* eslint-disable react/prop-types */
import { useState } from "react"

const ItemListContainer = ({ stock, unidad, title }) => {
  const [cantidad, setCantidad] = useState(unidad)

  const handleClick = (operacion) => {
    operacion === "-" ? clipRestar() : clipSumar();
  }
  const clipRestar = () => {
    if (cantidad === 1) {
      alert("No se puede restar")
      return;
    }
    setCantidad(cantidad - 1);
  };

  const clipSumar = () => {
    if (cantidad === stock) {
      alert("No hay stock")
      return;
    }
    setCantidad(cantidad + 1);
  };

  return (
    <section>
      <h2>{title}</h2>
      <div>
        <button onClick={() => handleClick("-")}>-</button>
        <span>{cantidad}</span>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
    </section>
  )
}

export default ItemListContainer