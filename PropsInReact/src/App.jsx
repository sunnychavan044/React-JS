import College from "../College";
import User from "./User"

function App() {
const users =[
  {name: "Aman S", age:22, email: "aman@example.com"},
  {name: "Adity M", age:27, email: "adity@example.com"},
  {name: "Sujay K", age:24, email: "sujay@example.com"},
  {name: "Amey H", age: 21, email: "amey@example.com"}
  
];

let collegeName=["IIT","BATU","MIT","KDBC"]

return (
  <div>
    <h1>
      {/* User Cards (Props + Toggle Example) */}
      collegeName={collegeName};
    </h1>

    {users.map((user, index) =>(
      <User
      key={index}
      name={user.name}
      age={user.age}
      email={user.email}
      />

    ))}

    <College />
  </div>
)
}

export default App