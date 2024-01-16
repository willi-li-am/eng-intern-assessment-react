import React, { useEffect, useState } from "react";
import StopWatch from "./StopWatch";

export default function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [lapse, setLapse]: [
    number[],
    React.Dispatch<React.SetStateAction<number[]>>,
  ] = useState([]);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(
        () => setCurrentTime((prevTime) => prevTime + 1),
        10,
      );
    } else if (currentTime != 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const startWatch = (): void => {
    setRunning(true);
  };

  const stopWatch = (): void => {setRunning(false)};

  const clearWatch = (): void => {
    setLapse([]);
    setCurrentTime(0);
  };

  const newLapse = (): void => {
    if(currentTime != 0) {
      setLapse([...lapse, currentTime]);
      setCurrentTime(0);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto",
        overflow: "auto",
        padding: "20px"
      }}
    >
      <StopWatch
        currentTime={currentTime}
        running={running}
        lapse={lapse}
        startWatch={startWatch}
        stopWatch={stopWatch}
        clearWatch={clearWatch}
        newLapse={newLapse}
      />
    </div>
  );
}
