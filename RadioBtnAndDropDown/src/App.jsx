import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");
  const [selected, setSelected] = useState("");

  const handleSelect = (event) => {
    const value = event.target.value;
    setSelected(value);

    // Reset dropdown to "Select a Cities"
    event.target.value = "";
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px 30px",
          width: "400px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          margin: "0 auto",
        }}
      >
        <h1 style={{ color: "#333" }}>Select Gender: {gender}</h1>

        {/* Radio Buttons */}
        <div style={{ marginBottom: "20px" }}>
          <input
            type="radio"
            onChange={(event) => setGender(event.target.value)}
            name="gender"
            id="male"
            value="Male"
            style={{ marginRight: "5px", transform: "scale(1.2)" }}
          />
          <label
            htmlFor="male"
            style={{ marginRight: "20px", fontSize: "18px", cursor: "pointer" }}
          >
            Male
          </label>

          <input
            type="radio"
            onChange={(event) => setGender(event.target.value)}
            name="gender"
            id="female"
            value="Female"
            style={{ marginRight: "5px", transform: "scale(1.2)" }}
          />
          <label
            htmlFor="female"
            style={{ marginRight: "20px", fontSize: "18px", cursor: "pointer" }}
          >
            Female
          </label>

          <input
            type="radio"
            onChange={(event) => setGender(event.target.value)}
            name="gender"
            id="other"
            value="Other"
            style={{ marginRight: "5px", transform: "scale(1.2)" }}
          />
          <label
            htmlFor="other"
            style={{ marginRight: "20px", fontSize: "18px", cursor: "pointer" }}
          >
            Other
          </label>
        </div>

        {/* Dropdown */}
        <div>
          <h3 style={{ color: "#333" }}>Selected City : {selected}</h3>

          <select
            defaultValue=""
            onChange={handleSelect}
            style={{
              width: "250px",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #aaa",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <option value="">Select a Cities</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Nagpur">Nagpur</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
