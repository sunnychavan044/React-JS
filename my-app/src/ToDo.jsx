import natureImg from "./assets/nature.jpg";

function ToDo() {
  function callFun() {
    alert("Function called");
  }
  return (
    <div>
      <h1>Nature</h1>
      <img src={natureImg} alt="Nature" className="photo" style={{width: "300px", height: "300px"}} />

      <ul>
        <li>Invent new traffic light</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>

      <button onClick={callFun}>Click Me</button>
    </div>
  )
}

export default ToDo;