import { useEffect, useState } from "react";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let secondTimer;
    let milliTimer;

    if (isRunning) {
      secondTimer = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 60) {
            setMinutes((m) => m + 1);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);

      milliTimer = setInterval(() => {
        setMilliSeconds((prev) => {
          if (prev === 99) return 0;
          return prev + 1;
        });
      }, 10);
    }

    return () => {
      clearInterval(secondTimer);
      clearInterval(milliTimer);
    };
  }, [isRunning]);

  return (
    <div className="stopwatch-container">
      <h1>StopWatch</h1>
      <h2>
        {minutes} : {seconds} : {milliseconds}
      </h2>

      <div className="btn-group">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button
          onClick={() => {
            setMinutes(0);
            setSeconds(0);
            setMilliSeconds(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
