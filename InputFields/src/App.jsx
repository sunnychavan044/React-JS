import { useState } from "react";

function App() {
  const [val, setVal] =useState(" ")
  return(
    <div>
      <h1>Input Fields</h1>
      <input type="text" value={val} onChange ={(event) => {
        setVal(event.target.value)
      }} placeholder="Enter Name"/>
      <h4>{val}</h4>
      <button onClick={() =>setVal("")}>Clear Value</button>
    </div>
  )
}

export default App;