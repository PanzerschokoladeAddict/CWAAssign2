"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const MenuCookies = () => {
  const [lastCookie, setLastCookie] = useState<string>("");

  const setCookie = (name: string, days: number) => {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    const k = encodeURIComponent(name);
    document.cookie = `${k};${expires};path=/`;
    setLastCookie(name); // update state
  };

  const getCookie = (name: string): string => {
    const k = encodeURIComponent(name) + "=";
    const parts = document.cookie.split(";");
    for (let c of parts) {
      c = c.trim();
      if (c.startsWith(k)) {
        return decodeURIComponent(c.substring(k.length));
      }
    }
    return "";
  };

  useEffect(() => {
    const last = getCookie("Tabs");
    if (last) setLastCookie(last);
  }, []);

  return (
    <div id="Tabs">
      <button onClick={() => setCookie("Tabs", 30)}>Tabs</button>
      <span></span>
      <button onClick={() => setCookie("Questions", 30)}>
        Pre-lab Questions
      </button>
      <span></span>
      <Link
        href="/escaperoom"
        style={{ alignContent: "center" }}
        onClick={() => setCookie("EscapeRoom", 30)}
      >
        Escape Room
      </Link>
      <span></span>
      <button onClick={() => setCookie("CodingRaces", 30)}>Coding Races</button>
      <span></span>
    </div>
  );
};

export default MenuCookies;
