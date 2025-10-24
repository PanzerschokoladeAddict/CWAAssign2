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
  const [stages, setStages] = useState<any[]>([]);

  const handlePreview = () => {
    setPreview({ title, instructions, timer, answer });
  };

  const handleAddStage = () => {
    const newStage = { title, instructions, timer, answer };
    setStages([...stages, newStage]);
    setTitle("");
    setInstructions("");
    setTimer(0);
    setAnswer("");
  };

  const handleSave = async () => {
    const stageData = { title, instructions, timer, answer };
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stageData),
      });
      if (res.ok) {
        alert("Stage saved successfully!");
      } else {
        alert("Failed to save stage.");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving stage.");
    }
  };

  const handleSaveAll = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stages/bulk`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stages),
      });
      if (res.ok) {
        alert("All stages saved successfully!");
      } else {
        alert("Failed to save stages.");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving stages.");
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
        <button onClick={handleSave}>Save Stage</button>
        <button onClick={handleSaveAll}>Save All Stages</button>

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
