/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { Remove } from "@mui/icons-material";
import NotWorking from "./Pages/NotWorking";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  const [cursor, setCursor] = useState({ x: "0px", y: "0px" });
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    const mousemoveHandler = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      setCursor({
        x: posX,
        y: posY,
      });
    };
    window.addEventListener("resize", windowSizeHandler);
    window.addEventListener("mousemove", mousemoveHandler);
    return () => {
      window.removeEventListener("resize", windowSizeHandler);
      window.removeEventListener("mousemove", mousemoveHandler);
    };
  }, []);
  const getComponent = () => {
    console.log(windowSize[0], windowSize[1]);
    if (windowSize[0] >= 1400 && windowSize[1] >= 600) {
      console.log("YES");
      return <HomePage />;
    }
    return <NotWorking />;
  };
  return (
    <>
      {/* <div
        className="cursor_custom"
        style={{ left: cursor.x, top: cursor.y }}
      >
        <div className="dot" style={{ left: cursor.x, top: cursor.y }}></div>
      </div> */}
      <Routes>
        <Route path="/" Component={getComponent} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </>
  );
}

export default App;
