import User from "../User";

function App() {
  const userData = [
    { name: "Sunny", age: 22, email: "sunny@test.com", id: 1 },
    { name: "Adi", age: 20, email: "aman@test.com", id: 2 },
    { name: "Peter", age: 24, email: "peter@test.com", id: 3 },
  ];

  return (
    <div>
      <h4>Reuse Component</h4>

      {userData.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}

    </div>
  );
}

export default App;
