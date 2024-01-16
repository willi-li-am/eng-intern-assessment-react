import React, { useEffect, useState } from "react";
import { THEME } from "./constants";
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
  const startWatch = () => {
    setRunning(true);
  };

  const stopWatch = () => [setRunning(false)];

  const clearWatch = () => {
    setLapse([]);
    setCurrentTime(0);
  };

  const newLapse = () => {
    setLapse([...lapse, currentTime]);
    setCurrentTime(0);
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto",
        overflow: "auto",
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
