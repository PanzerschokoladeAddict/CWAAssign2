import React, { useEffect } from "react";
import { useState } from "react";

interface StageOneProps {
  onComplete: () => void;
}

const StageOne = ({ onComplete }: StageOneProps) => {
  const [code, setCode] = useState(`// Write your code here
`);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (
      /for\s*\(\s*let\s+\w+\s*=\s*0\s*;\s*\w+\s*<=\s*1000\s*;.*\)/.test(code)
    ) {
      onComplete();
    } else {
      setError("The Code formatting is incorrect. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1b202b",
        backgroundSize: "cover",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1 style={{ color: "lime", fontFamily: "monospace", fontSize: "20px" }}>
        Stage One: Format Code
      </h1>
      <br />
      <p>
        Write code in Javascript to output to the console, using a for-loop, all
        the numbers between 0 to 1000.
      </p>
      <br />
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={60}
        style={{
          backgroundColor: "black",
          color: "lime",
          fontFamily: "monospace",
          fontSize: "16px",
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "1rem",
          backgroundColor: "lime",
          color: "black",
          border: "2px solid black",
          fontSize: "1.5rem",
        }}
      >
        Submit
      </button>
      <br />
      <br />
      <span>{error && <p style={{ color: "red" }}>{error}</p>}</span>
    </div>
  );
};

export default StageOne;
