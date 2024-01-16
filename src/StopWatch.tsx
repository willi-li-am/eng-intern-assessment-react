import React from "react";
import StopWatchButton from "./StopWatchButton";
import { THEME } from "./constants";
import DisplayTime from "./timer";

export default function StopWatch({currentTime, lapse, runnin, startWatch, stopWatch, clearWatch, newLapse}: any) {
  return (
    <div style={{backgroundColor: THEME[0], width:"70vw", height: "80vh", borderRadius: "10px", display: "flex", alignItems: "center", flexDirection: "column", color: 'white', padding: "15px"}}>
        <div style={{fontSize: "40px", fontWeight: "bold"}}>Stopwatch</div>
        <DisplayTime currentTime={currentTime}/>
        <StopWatchButton></StopWatchButton>
        <div>Show lapse times</div>
    </div>
  );
}
