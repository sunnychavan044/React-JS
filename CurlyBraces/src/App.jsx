import natureImg from "./assets/nature.jpg";


function App() {
  const name = "Aman";
  const user = "Ajay";
  const isLoggedIn = true;
  const a = 10;
  const b = 20;
  const person = {name: "AMAN", age: 22};
  const Car = ["BMW", "SWIFT", "KIA"];

  return (
    <div>
      <h1>JSX with curly Braces</h1>
      <h3>{name}</h3>

      <h1>User variable with JSX</h1>
      <h3>Hello, {user}</h3>

      <h1>Condition inside JSX</h1>
      <p>{isLoggedIn ? "Welcome User" : "Please Login"}</p>

      <h1>Operation inside JSX</h1>
      <p>{a} + {b} = {a + b}</p>

      <h1>Object and Array with JSX</h1>

      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>

      <h4>Car List:</h4>
      <ul>
        {Car.map((c, index) =>(
          <li key={index}>{c}</li>
        ))}
      </ul>

      <h1>HTML tags property with JSX</h1>

      <img src={natureImg} alt="Nature" width="200" height="200"
      />

      <p style={{ color: "#f8923e", fontSize: "20px" }}>
        This is a styled paragraph
      </p>
    </div>
    ); 
}
export default App;