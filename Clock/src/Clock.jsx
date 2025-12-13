import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [color, setColor] = useState("white");

  setTimeout(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        border: "2px solid black",
        height: "160px",
        width: "220px",
        background: "black",
        color: "white",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h2>Clock</h2>
      <h1 style={{ color }}>{time}</h1>

      <select
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={{ marginTop: "10px" }}
      >
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="Yellow">Yellow</option>
        <option value="cyan">Cyan</option>
      </select>
    </div>
  );
};

export default Clock;
