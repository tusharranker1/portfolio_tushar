/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../Pages/HomePage.css";
import lms from '../../assets/HomePage.png'


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
        <div className="project project1">
        <div className="coverImg"></div>
        <img src={lms}/>
            <h1>Learning Management System</h1>
        </div>
        <div className="project project2">
        <div className="coverImg"></div>
        <img src={lms}/>
            <h1>Box Office</h1>
        </div>
      </div>
    </>
  );
}
