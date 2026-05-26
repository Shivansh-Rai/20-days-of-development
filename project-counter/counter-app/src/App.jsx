import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
  <div className="container">

    <div className="counter-box">

      <h1>Counter App</h1>

      <h2>{count}</h2>

      <div className="buttons">

        <button onClick={increment}>+</button>

        <button onClick={decrement}>-</button>

        <button onClick={reset}>Reset</button>

      </div>

    </div>

  </div>
);
}

export default App;