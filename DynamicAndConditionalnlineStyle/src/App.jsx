import { useState } from "react";   // React hook for state management
import image from "./assets/image.jpg"; // Import image asset

function App() {

  // Card style state (inline CSS stored as JS object)
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
    backgroundColor: "white",
    color: "black",
  });

  // State to track theme (false = default, true = gray theme)
  const [isGray, setIsGray] = useState(false);

  // State to toggle grid / list layout
  const [grid, setGrid] = useState(true);

  // Function to toggle theme (Gray <-> Default)
  const toggleTheme = () => {

    // If current theme is gray, switch to default
    if (isGray) {
      setCardStyle({
        ...cardStyle,
        backgroundColor: "white",
        color: "black",
      });
    }
    // Otherwise switch to gray theme
    else {
      setCardStyle({
        ...cardStyle,
        backgroundColor: "gray",
        color: "cyan",
      });
    }

    // Toggle theme state
    setIsGray(prev => !prev);
  };

  return (
    <>
      {/* Page heading */}
      <h1 style={{ color: "red" }}>Inline Style in React Js</h1>

      {/* Theme toggle button */}
      <button onClick={toggleTheme}>
        {isGray ? "Default Theme" : "Gray Theme"}
      </button>

      {/* Grid/List toggle button */}
      <button onClick={() => setGrid(prev => !prev)}>
        Toggle Grid
      </button>

      {/* Container for cards */}
      <div
        style={{
          display: grid ? "flex" : "block", // Flex = grid view, block = list view
          flexWrap: "wrap",
        }}
      >
        {/* Card 1 */}
        <div style={cardStyle}>
          <img
            src={image}
            alt="image"
            style={{ width: "100%", height: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4>Parrot</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <img
            src={image}
            alt="image"
            style={{ width: "100%", height: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4>Parrot</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <img
            src={image}
            alt="image"
            style={{ width: "100%", height: "200px" }}
          />
          <div style={{ padding: "5px" }}>
            <h4>Parrot</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
