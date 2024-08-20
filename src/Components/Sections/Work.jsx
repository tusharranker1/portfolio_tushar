/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../Pages/HomePage.css";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";


export default function Experience() {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [lineactive, setLineActive2] = useState(true);
  const [tab,setTab] = useState(false)
  return (
    <>
      <h1 className="about_heading expVersionHeading">
        <span>01.</span>&nbsp;Projects{" "}
        <div className="about_line "></div>
      </h1>
      <div className="works_wrapper">
        <div className="card card1"></div>
        <div className="card card2 active"></div>
        <div className="card card3"></div>
        <div className="cardLine"></div>
      </div>
    </>
  );
}
