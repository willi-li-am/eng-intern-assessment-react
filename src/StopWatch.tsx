import React, { MouseEvent } from "react";
import StopWatchButton from "./StopWatchButton";
import { DisplayTime, LapseView } from "./timer";

interface StopWatchProps {
  currentTime: number;
  lapse: number[];
  running: boolean;
  startWatch: (event: MouseEvent<HTMLButtonElement>) => void;
  stopWatch: (event: MouseEvent<HTMLButtonElement>) => void;
  clearWatch: (event: MouseEvent<HTMLButtonElement>) => void;
  newLapse: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function StopWatch({
  currentTime,
  lapse,
  running,
  startWatch,
  stopWatch,
  clearWatch,
  newLapse,
}: StopWatchProps) {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "70vw",
        height: "calc(100vh - 40px)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
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
      <LapseView lapse={lapse}></LapseView>
    </div>
  );
}
