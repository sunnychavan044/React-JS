import { useState } from "react";

function App() {
  const [Car, setCar] = useState("BMW");
  const [count, SetCount] = useState(0);
  const [Counts, setCounts] = useState(0);

  const handleCar = () => {
    setCar("SWIFT");
  };

  const incrementCount = () => {
    SetCount(count + 1);
  };

  const decrementCount = () => {
    setCounts(Counts - 1);
  };
  return (
    <div>
      <h1>State in React JS</h1>
      <h1>{Car}</h1>
      <button onClick={handleCar}>Change Car Name</button>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <h1>{Counts}</h1>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default App;
