import { useState } from "react";

    const Clock = () => {
        const [time, setTime] = useState(new Date().toLocaleTimeString());

        setTimeout(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    return(
        <div style={{ textAlign: "center", marginTop: "20px", border:"2px solid black", height: "120px", width: "220px", background: "black", color: "white", borderRadius:"10px"}}>
            <h2>Clock</h2>
            <h1 style={{ color: "white"}}>{time}</h1>

        </div>
    );
};

export default Clock;