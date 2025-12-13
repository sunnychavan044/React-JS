function App() {
  const arr = [
    {
      name: "MIT",
      city: "Pune",
      website: "www.mit.com",
      student: [
        { name: "Jay K", age: "26", email: "jay@gmail.com" },
        { name: "AK G", age: "23", email: "akg@gmail.com" },
        { name: "Piyush T", age: "22", email: "piyush@gmail.com" },
      ],
    },
    { name: "IIT", city: "Delhi", website: "www.iit.com" },
    { name: "COEP", city: "ShivajiNagar", website: "www.coep.com" },
  ];

  return (
    <div>
      <h3>Nested Loop</h3>
      {arr.map((college, index) => (
        <div key={index} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
          <h1>Name: {college.name}</h1>
          <ul>
            <li><h3>City: {college.city}</h3></li>
            <li><h3>Website: {college.website}</h3></li>
          </ul>

          {college.student && (
            <div style={{ marginLeft: "20px" }}>
              <h4>Students:</h4>
              {college.student.map((stu, idx) => (
                <p key={idx}>{stu.name} - {stu.age} - {stu.email}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
