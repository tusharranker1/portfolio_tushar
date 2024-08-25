/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const NavBar = (obj) => {
  const navWrapRef = useRef(null);
  useGSAP(
    () => {
      const tl1 = gsap.timeline();
      const tl2 = gsap.timeline();
      tl1.fromTo('.item1',{opacity:0,y:-200},{opacity:1,y:0,duration:0.2})
      .fromTo('.item2',{opacity:0,y:-200},{opacity:1,y:0,duration:0.2})
      .fromTo('.item3',{opacity:0,y:-200},{opacity:1,y:0,duration:0.2})
      .fromTo('.item4',{opacity:0,y:-200},{opacity:1,y:0,duration:0.2})
      .fromTo('.resume',{opacity:0,y:-200},{opacity:1,y:0,duration:0.2})

    },
    {scope:navWrapRef }
  );
  
  const [boxActive, setBoxActive] = useState(false);
  const overHandler = () => {
    setBoxActive(true);
    
  };
  const outHandler = () => {
    setBoxActive(false);
  
  };
  return (
    <div className="nav-wrapper" ref={navWrapRef}>
      <div className="box_wrapper">
        <div
          className="box_content"
          onMouseOver={overHandler}
          onMouseLeave={outHandler}
        >
          T
        </div>
        <div className={boxActive ? "box box_active1" : "box"}></div>
        <div className={boxActive ? "box box_active2" : "box"}></div>
      </div>
      <div className="nav_items_wrapper">
        <div className="item item1">
          <button
            onClick={() => {
              obj.obj.aboutRef?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span>01.</span> About
          </button>
        </div>
        <div className="item item2">
          <button
            href="#experience_section"
            onClick={() => {
              obj.obj.expRef?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span>02.</span> Experience
          </button>
        </div>
        <div className="item item3">
          <button
            href="#work_section"
            onClick={() => {
              obj.obj.workRef?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span>03.</span> Projects
          </button>
        </div>
        <div className="item item4">
          <button
            href="#contact_section"
            onClick={() => {
              obj.obj.contactRef?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span>04.</span> Contact
          </button>
        </div>
        <div className="item resume">
          <a>Resume</a>
        </div>
      </div>
    </div>
  );
};
