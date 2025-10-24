"use client";
import React from "react";
import { useState } from "react";
import DynamicStage from "./builder/DynamicStage";

const page = () => {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [timer, setTimer] = useState(0);
  const [answer, setAnswer] = useState("");

  const [preview, setPreview] = useState<any>(null);

  const handlePreview = () => {
    setPreview({ title, instructions, timer, answer });
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
      <h1 id="EscapeTextTitle">Escape Room Builder</h1>

      <div>
        <div>
          <label id="EscapeText">Stage Title</label>
          <br />
          <textarea
            id="EscapeArea"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label id="EscapeText">Instructions</label>
          <br />
          <textarea
            id="EscapeArea"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <div>
          <label id="EscapeText">Timer</label>
          <br />
          <input
            type="number"
            id="EscapeArea"
            value={timer}
            onChange={(e) => setTimer(Number(e.target.value))}
          />
        </div>

        <div>
          <label id="EscapeText">Set Answer</label>
          <br />
          <textarea
            id="EscapeArea"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>

        <button onClick={handlePreview}>Preview Stage</button>

        {preview && (
          <div>
            <h2>Preview</h2>
            <DynamicStage stage={preview} />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
