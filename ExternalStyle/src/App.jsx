import { useState } from "react";
import image from "./assets/image.jpg";

function App() {
  const [gray, setGray] = useState(false);

  return (
    <>
      <h1 className="title">External CSS in React</h1>

      <button onClick={() => setGray((prev) => !prev)}>
        {gray ? "Default Theme" : "Gray Theme"}
      </button>

      <div className="container">
        <div className={`card ${gray ? "gray-theme" : "default-theme"}`}>
          <img src={image} alt="image" />
          <div className="card-content">
            <h4>Parrot</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className={`card ${gray ? "gray-theme" : "default-theme"}`}>
          <img src={image} alt="image" />
          <div className="card-content">
            <h4>Parrot</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
