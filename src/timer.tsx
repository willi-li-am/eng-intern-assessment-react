import React from "react";

const DisplayTime = ({ currentTime }: any) => {
  const reformat = (time: number): string => {
    if (time < 10) {
      return "0" + String(time);
    }
    return String(time);
  };
  const displaySeconds = (currentTime: number): string => {
    const seconds = Math.floor((currentTime / 100) % 60);
    return reformat(seconds);
  };
  const displayMilliseconds = (currentTime: number): string => {
    const milliseconds = Math.floor(currentTime % 100);
    return reformat(milliseconds);
  };
  const displayMinutes = (currentTime: number): string => {
    const minutes = Math.floor((currentTime / 6000) % 60);
    return reformat(minutes);
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        fontSize: "120px",
        userSelect: "none",
      }}
    >
      <div style={{ width: "auto", textAlign: "center" }}>
        {displayMinutes(currentTime)}
      </div>
      <div>:</div>
      <div style={{ width: "auto", textAlign: "center" }}>
        {displaySeconds(currentTime)}
      </div>
      <div>:</div>
      <div style={{ width: "auto", textAlign: "center" }}>
        {displayMilliseconds(currentTime)}
      </div>
    </div>
  );
};

export default DisplayTime;
