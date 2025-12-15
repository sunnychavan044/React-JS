import { useEffect } from "react";

const Counter = () => {

    const handleCounter=() => {
        console.log("handleCounter called...");

    }

    useEffect(() =>{
        handleCounter();
    }, []);
    handleCounter();
  return (
    <div>
      <h3>Counter Component</h3>
    </div>
  )
  };


export default Counter;
