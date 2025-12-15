import { useEffect } from "react";

const Counter =({ count, data}) => {

    //Mounting
    useEffect(() => {
console.log("Mounting Phase only");

    }, [])

    useEffect(() => {
        return () =>{
            console.log("Unmount Phase Only")
        }
    }, [])

    return (
        <div>
            <h1>Counter Value {count}</h1>
            <h1>Data Value {data}</h1>
        </div>
    )
}

export default Counter;