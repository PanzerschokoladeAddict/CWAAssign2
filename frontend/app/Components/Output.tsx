"use client";
import React, { use } from "react";

const Output = () => {
  return (
    <div>
      <button style={{ border: "2px solid" }}>Output</button>
      <div
        style={{
          background: "#ffffff",
          overflow: "auto",
          width: "auto",
          border: "solid gray",
          borderWidth: ".1em .1em .1em .8em",
          padding: ".2em .6em",
        }}
      >
        <pre style={{ margin: 0, lineHeight: "125%" }}>
          {`1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
`}
        </pre>
      </div>
    </div>
  );
};

export default Output;
