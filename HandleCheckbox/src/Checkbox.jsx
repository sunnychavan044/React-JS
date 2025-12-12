import { useState } from "react";

function Checkbox() {
    const [skills, setSkills] = useState([])

    const handleSkills=() => {
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value]) 
        } else {
            setSkills([...skills.filter((item) => item!= event.target.value)]) 
        }
    }
    return(
        <div>
            <h3>Select Your Skills</h3>
            <div>
            <input onChange={handleSkills} type="checkbox" id="php" value="php"/><label htmlFor="php">PHP</label>
            </div>
            <div>
            <input onChange={handleSkills} type="checkbox" id="html" value="html"/><label htmlFor="html">HTML</label>
            </div>
            <div>
            <input onChange={handleSkills} type="checkbox" id="js" value="js"/><label htmlFor="js">JS</label>
            </div>
            <div>
            <input onChange={handleSkills} type="checkbox" id="node" value="node"/><label htmlFor="node">Node</label>
            </div>
            <div>
            <input onChange={handleSkills} type="checkbox" id="java" value="java"/><label htmlFor="java">Java</label>
            </div>
            <div>
            <input onChange={handleSkills} type="checkbox" id="py" value="python"/><label htmlFor="py">Python</label>
            </div>

            <h1>{skills.toString()}</h1>
        </div>
    );
}

export default Checkbox;