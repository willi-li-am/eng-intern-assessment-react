import React, { useState, ReactNode, MouseEvent } from "react";

interface WatchButtonProps {
  children: ReactNode;
  color: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  hoverColor: string;
  textColor: string;
}

const WatchButton = ({
  children,
  color,
  onClick,
  hoverColor,
  textColor,
}: WatchButtonProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        width: "85px",
        height: "85px",
        borderRadius: "100%",
        borderColor: color,
        borderWidth: "3px",
        borderStyle: "solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.5s ease",
      }}
    >
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: hovered ? hoverColor : color,
          borderRadius: "100%",
          border: "none",
          cursor: "pointer",
          transition: "0.5s ease",
          fontSize: "20px",
          color: textColor,
        }}
      >
        {children}
      </button>
    </div>
  );
};

interface StopWatchButtonProps {
  running: boolean;
  startWatch: (event: MouseEvent<HTMLButtonElement>) => void;
  stopWatch: (event: MouseEvent<HTMLButtonElement>) => void;
  clearWatch: (event: MouseEvent<HTMLButtonElement>) => void;
  newLapse: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function StopWatchButton({
  running,
  startWatch,
  stopWatch,
  clearWatch,
  newLapse,
}: StopWatchButtonProps) {
  return (
    <div style={{ display: "flex", gap: "80px" }}>
      <WatchButton
        hoverColor="#89621B"
        color="#533C10"
        textColor="#B88321"
        onClick={clearWatch}
      >
        Clear
      </WatchButton>
      <WatchButton
        hoverColor="#576878"
        color="#36414A"
        textColor="#849EB6"
        onClick={newLapse}
      >
        Lap
      </WatchButton>
      {running ? (
        <WatchButton
          hoverColor="#901C1A"
          color="#621413"
          textColor="#BF2522"
          onClick={stopWatch}
        >
          Stop
        </WatchButton>
      ) : (
        <WatchButton
          hoverColor="#04622B"
          color="#02401C"
          textColor="#05A447"
          onClick={startWatch}
        >
          Start
        </WatchButton>
      )}
    </div>
  );
}
