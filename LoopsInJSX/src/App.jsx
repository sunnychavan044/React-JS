function App() {
  const userData = [
    {
      name: "Sunny",
      age: 22,
      email: "sunny@test.com",
      id: 1,
    },

    {
      name: "Aman",
      age: 20,
      email: "aman@test.com",
      id: 2,
    },

    {
      name: "Peter",
      age: 24,
      email: "peter@test.com",
      id: 3,
    },
  ];

  return (
    <div>
      <h3>Loops In JSX with Map Function</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h1>Dummy Data</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Sunny</td>
            <td>sunny@gmail.com</td>
            <td>22</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Sujay</td>
            <td>sujay@gmail.com</td>
            <td>24</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Raj</td>
            <td>raj@gmail.com</td>
            <td>25</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Amey</td>
            <td>amey@gmail.com</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
