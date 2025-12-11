function App() {
  function callFun() {
    alert("function called")
  }

  const Car = () =>{
    alert("BMW");
  }

  return (
    <div>
      <h1>Event and function call</h1>
      <button className="btn" onClick={() =>{
        alert("Function Called..!");
      }}>Click Me</button>
      <div>
        <button className="btn1" onClick={() =>{
          alert("BMW");
        }}>Car </button>
      </div>
    </div>
  );
}

export default App
