import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [skills, setSkills] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSkillChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  const handleCitySelect = (event) => {
    const selectedValue = event.target.value;
    setCity(selectedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "30px",
        backgroundColor: "#eef2f3",
      }}
    >
      <div
        style={{
          width: "600px",
          margin: "0 auto",
          padding: "25px",
          borderRadius: "12px",
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Controlled Component Form</h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px" }}>Name:</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                marginTop: "5px",
                borderRadius: "8px",
                border: "1px solid #aaa",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px" }}>Email:</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                marginTop: "5px",
                borderRadius: "8px",
                border: "1px solid #aaa",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px" }}>Gender:</label>
            <br />
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
              style={{ marginRight: "5px" }}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
              style={{ marginLeft: "20px", marginRight: "5px" }}
            />
            Female
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={(e) => setGender(e.target.value)}
              style={{ marginLeft: "20px", marginRight: "5px" }}
            />
            Other
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px" }}>Skills:</label>
            <br />
            <input
              type="checkbox"
              value="HTML"
              onChange={handleSkillChange}
              style={{ marginRight: "6px" }}
            />
            HTML
            <input
              type="checkbox"
              value="CSS"
              onChange={handleSkillChange}
              style={{ marginLeft: "20px", marginRight: "6px" }}
            />
            CSS
            <input
              type="checkbox"
              value="JavaScript"
              onChange={handleSkillChange}
              style={{ marginLeft: "20px", marginRight: "6px" }}
            />
            JavaScript
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px" }}>City:</label>
            <br />
            <select
              value={city}
              onChange={handleCitySelect}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid black",
                marginTop: "5px",
              }}
            >
              <option value="">Select City</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Nagpur">Nagpur</option>
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontSize: "18px" }}>Address:</label>
            <br />
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Address"
              rows={3}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #aaa",
                marginTop: "5px",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "12px",
                backgroundColor: "#4caf50",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                transition: "0.3s",
              }}
            >
              Submit
            </button>
          </div>
        </form>

        {submitted && (
          <>
            <hr />
            <h2 style={{ textAlign: "center" }}>Live Preview</h2>

            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Gender:</strong> {gender}
            </p>
            <p>
              <strong>City:</strong> {city}
            </p>

            <p>
              <strong>Skills:</strong>
              <br />
              {skills.length > 0
                ? skills.map((skill, i) => <div key={i}>• {skill}</div>)
                : "No skills selected"}
            </p>

            <p>
              <strong>Address:</strong> {address}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
