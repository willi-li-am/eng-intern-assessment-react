import React from "react";

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

const LapseItem = ({ time, index }: any) => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          display: "flex",
          gap: "5px",
          fontSize: "50px",
          userSelect: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "20px", marginRight: "20px", width: "150px" }}>
          Lapse {index}:
        </div>
        <div style={{ width: "auto", textAlign: "center" }}>
          {displayMinutes(time)}
        </div>
        <div>:</div>
        <div style={{ width: "auto", textAlign: "center" }}>
          {displaySeconds(time)}
        </div>
        <div>:</div>
        <div style={{ width: "auto", textAlign: "center" }}>
          {displayMilliseconds(time)}
        </div>
      </div>
    </div>
  );
};

const LapseView = ({ lapse }: any) => {
  const reverseLapse = lapse.slice().reverse();
  return (
    <div style={{ overflow: "auto", width: "100%" }}>
      {reverseLapse.map((time: number, index: number) => {
        return (
          <LapseItem
            key={"lapse" + index}
            time={time}
            index={reverseLapse.length - index}
          ></LapseItem>
        );
      })}
    </div>
  );
};

const DisplayTime = ({ currentTime }: any) => {
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

export { DisplayTime, LapseView };
