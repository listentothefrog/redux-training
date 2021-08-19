import { useState } from "react";
import "./App.css";

const App = () => {
  // counter that will be used to increment and decrement
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className={"App"}>
      <h1>{counter}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
