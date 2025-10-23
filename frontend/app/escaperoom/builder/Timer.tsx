import React, { useEffect, useState } from "react";

interface TimerProps {
  duration: number;
}

const Timer = ({ duration }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [timeoutMessage, setTimeoutMessage] = useState("");

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeoutMessage("Time's up! You failed to complete the stage.");
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#1b202b",
        padding: "10px",
      }}
    >
      <p style={{ fontSize: "20px", color: "red" }}>
        Time left: {formatTime(timeLeft)}
      </p>
      <span>
        {timeoutMessage && <p style={{ color: "red" }}>{timeoutMessage}</p>}
      </span>
    </div>
  );
};

export default Timer;
