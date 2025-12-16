import image from "./assets/image.jpg";

function App() {
  const cardStyle = {
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Inline Style in React Js</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
