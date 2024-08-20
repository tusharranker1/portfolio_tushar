/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { useState } from "react";

function App() {
  const [cursor, setCursor] = useState({ x: "0px", y: "0px" });
  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    setCursor({
      x: posX,
      y: posY,
    });
  });
  return (
    <>
      {/* <div
        className="cursor_custom"
        style={{ left: cursor.x, top: cursor.y }}
      >
        <div className="dot" style={{ left: cursor.x, top: cursor.y }}></div>
      </div> */}
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </>
  );
}

export default App;
