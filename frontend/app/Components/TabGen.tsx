"use client";
import React, { useState, useEffect } from "react";

const TabGen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([{ id: 1, heading: "Tab 1", content: "" }]);

  // Load tabs from storage
  useEffect(() => {
    const savedTabs =
      typeof window !== "undefined" ? localStorage.getItem("tabs") : null;
    if (savedTabs) {
      setTabs(JSON.parse(savedTabs));
    }
  }, []);

  // Save tabs to localStorage when changed
  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  // Add a new tab
  const createTab = () => {
    if (tabs.length >= 15) return;
    setTabs([
      ...tabs,
      { id: tabs.length + 1, heading: `Tab ${tabs.length + 1}`, content: "" },
    ]);
    setActiveTab(tabs.length);
  };

  // Remove the last tab
  const removeTab = () => {
    if (tabs.length <= 1) return;
    setTabs(tabs.slice(0, -1));
    setActiveTab((prev) => Math.min(prev, tabs.length - 2));
  };

  // Update tab heading
  const updateHeading = (index: any, value: any) => {
    setTabs(
      tabs.map((tab: any, i: any) =>
        i === index ? { ...tab, heading: value } : tab
      )
    );
  };

  // Update tab content
  const updateContent = (index: any, value: any) => {
    setTabs(
      tabs.map((tab: any, i: any) =>
        i === index ? { ...tab, content: value } : tab
      )
    );
  };

  return (
    <div>
      <br />
      <h1>Tabs</h1>
      <br />

      <div
        style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
      >
        <h2>Tab Headers:</h2>
        <button onClick={createTab}>[+]</button>
        <button onClick={removeTab}>[-]</button>
      </div>

      <div style={{ display: "flex", marginTop: "1rem" }}>
        <div
          id="ButtonContainer"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {tabs.map((tab, index) => (
            <span
              key={tab.id}
              className={index === activeTab ? "active-tab" : ""}
              onClick={() => setActiveTab(index)}
            >
              <input
                value={tab.heading}
                onChange={(e) => updateHeading(index, e.target.value)}
              />
            </span>
          ))}
        </div>

        <div style={{ flex: "1", marginLeft: "4rem", marginTop: "-40px" }}>
          <h2>Tabs content</h2>
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              style={{ display: index === activeTab ? "block" : "none" }}
            >
              <textarea
                value={tab.content}
                onChange={(e) => updateContent(index, e.target.value)}
                placeholder="Enter Text Here"
                rows={10}
                cols={30}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabGen;
