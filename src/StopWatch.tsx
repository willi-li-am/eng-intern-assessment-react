import React from "react";
import StopWatchButton from "./StopWatchButton";
import { THEME } from "./constants";
import DisplayTime from "./timer";

export default function StopWatch({
  currentTime,
  lapse,
  running,
  startWatch,
  stopWatch,
  clearWatch,
  newLapse,
}: any) {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "70vw",
        height: "80vh",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        padding: "15px",
        gap: "10px",
      }}
    >
      <DisplayTime currentTime={currentTime} />
      <StopWatchButton
        startWatch={startWatch}
        stopWatch={stopWatch}
        clearWatch={clearWatch}
        newLapse={newLapse}
        running={running}
      ></StopWatchButton>
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          height: "2px",
          margin: "20px",
        }}
      ></div>
      <div>
        {lapse.map((time: number, index: number) => {
          return <DisplayTime currentTime={time} />;
        })}
      </div>
    </div>
  );
}
