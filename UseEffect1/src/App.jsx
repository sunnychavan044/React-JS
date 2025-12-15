import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount]=useState(0);
  return (
    <div>
      <Counter />
      <button onClick={() =>setCount(count + 1) }>Counter {Counter}</button>
    </div>
  )
}
export default App;