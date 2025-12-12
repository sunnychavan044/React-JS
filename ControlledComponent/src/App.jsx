import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Controlled Component</h1>
      <form action="" method="get">
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Name" />
        <br />
        <br />
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
        <br /> <br />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" />
        <br /> <br />
        <button type="submit">Submit</button>

        <button onClick={() =>{setName('');setEmail('');setPassword('');}}>Clear</button>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{password ? "*".repeat(password.length) : ""}</h3>
      </form>
    </div>
  );
}
export default App;
