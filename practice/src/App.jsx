function App() {
  const user = "AMAN";
  let a = 20;
  let b = 30;
  return (
    <div>
      <h1>{user}</h1>

      <h1>Current Date</h1>
      <p>{new Date().getDate()}/{new Date().getMonth() +1}/{new Date().getFullYear()}</p>

      <h1>{a} * {b} = {a * b}</h1>
    </div>
  )
}

export default App;