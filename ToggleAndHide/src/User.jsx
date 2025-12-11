import { useState } from "react";

function User() {
    const [show, setShow] = useState(true);

    const handleToggle = () => {
        setShow(!show);
    };

    return(
        <div>
            <button onClick={handleToggle}>
                {show ? "Hide" : "Show"}
            </button>

            {show && <h1>This is a toggle text!</h1>}
        </div>
    );
}

export default User;