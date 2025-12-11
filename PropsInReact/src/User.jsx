import { useState } from "react";

function User({name, age, email}) {
    const [showDetails, setShowDetails] = useState(true);

    const handleToggle =() => {
        setShowDetails(!showDetails);
    };

    return (
        <div style={{ border: "1px solid #000000ff", padding: "10px", margin: "10px", width: "300px", }}>
            <h2>{name}</h2>
            <p>Age: {age}</p>

            {showDetails && <p>Email: {email}</p>}

            <button onClick={handleToggle}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
        </div>
    );
}

export default User;