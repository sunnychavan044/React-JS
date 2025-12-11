import { useState } from "react";
import User from "./User";

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <h1>Toggle in React js</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>

      {display ? <h1>Aman Sharma</h1> : null}

      <div>
        <User />
      </div>
    </>
  );
}

export default App;
