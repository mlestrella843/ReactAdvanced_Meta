import React, { useReducer } from "react";

// 1. Definir la función reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Acción no reconocida");
  }
};

const Counter = () => {
  // 2. Inicializar el estado con useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter: {state.count}</h1>
      <button className="bg-green-400 text-white text-xs rounded mx-2 p-2" onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button className="bg-green-400 text-white text-xs rounded mx-2 p-2" onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button className="bg-green-400 text-white text-xs rounded mx-2 p-2" onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
export {Counter};
