import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");
  const [selected, setSelected] = useState("");

  const handleSelect = (event) => {
    const value = event.target.value;
    setSelected(value);

    event.target.value = "";
  };

  return (
    <div>
      <h1>Select Gender: {gender}</h1>

      <input
        type="radio"
        onChange={() => setGender(event.target.value)}
        name="gender"
        id="male"
        value="Male"
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        onChange={() => setGender(event.target.value)}
        name="gender"
        id="female"
        value="Female"
      />
      <label htmlFor="female">Female</label>


      <input
        type="radio"
        onChange={() => setGender(event.target.value)}
        name="gender"
        id="other"
        value="Other"
      />
      <label htmlFor="other">Other</label>

      <div>
        <h3>Selected City : {selected}</h3>
        <select
          defaultValue="" onChange={handleSelect}
        >
          <option value="">Select a Cities</option>
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="nagpur">Nagpur</option>
        </select>
      </div>
    </div>
  );
}
export default App;
