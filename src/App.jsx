/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { useEffect, useState } from "react";
import NotWorking from "./Pages/NotWorking";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerHeight,
    window.innerWidth,
  ]);
  const setComponent = () => {
    if (windowSize[0] >= 600 && windowSize[1] >= 1400) {
      return <HomePage />;
    }
    return <NotWorking />;
  };
  useEffect(() => {
    const resizeHandler = () => {
      setWindowSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", resizeHandler);
    return ()=>{
      window.removeEventListener("resize",resizeHandler)
    }
  },[]);

  return (
    <>
      {/* <div
        className="cursor_custom"
        style={{ left: cursor.x, top: cursor.y }}
      >
        <div className="dot" style={{ left: cursor.x, top: cursor.y }}></div>
      </div> */}
      <Routes>
        <Route path="/" Component={setComponent} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </>
  );
}

export default App;
