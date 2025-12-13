import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("API call started");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Counter changed:", count);
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer running....");
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Dashboard</h1>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <hr />

      {loading && <h3>Loading.....</h3>}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      {!loading && !error &&(
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <b>{user.name}</b> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
