import { useState } from "react";

function Color() {
    const [color, setColor] = useState("red");

    return(
        <div>
            <h1 style={{color: color}}>Color is: {color === "#fe46ae" ? "other" : color}</h1>

            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("green")}>Green</button>
            <button onClick={() => setColor("orange")}>Orange</button>

            <button onClick={() =>{
                setColor("#fe46ae");
                setLabel("other");
            }}>
                Other
            </button>
        </div>
    );
}

export default Color;