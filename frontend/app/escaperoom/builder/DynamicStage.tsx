import React from "react";
import Timer from "./Timer";

const DynamicStage = ({ stage }: { stage: any }) => {
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = () => {
    try {
      const regex = new RegExp(stage.answer, "i"); // 'i' = case-insensitive
      if (regex.test(code)) {
        setError("Correct answer! Proceeding to the next stage.");
      } else {
        setError("Incorrect answer. Try again!");
      }
    } catch (e) {
      setError("Invalid regex pattern in stage answer.");
    }
  };

  return (
    <div>
      <h3>{stage.title}</h3>
      {stage.timer > 0 && <Timer duration={stage.timer} />}
      <p>{stage.instructions}</p>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={5}
        cols={50}
      />
      <br />
      <button onClick={handleSubmit}>Submit Answer</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default DynamicStage;
