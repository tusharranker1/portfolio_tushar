/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import { NavBar } from "../Components/NavBar";
import { Loader } from "../Components/Loader/Loader";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Intro from "../Components/Sections/Intro";
import About from "../Components/Sections/About";
import Experience from "../Components/Sections/Experience";
import Work from "../Components/Sections/Work";
import LeftPannel from "../Components/Sections/LeftPannel";

export const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const mainWrapper = useRef(null);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7500);
  }, []);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".intro", {
        y: 300,
        opacity: 0,
        duration: 3,
        delay: 8,
      });
      console.log("trigered");
    },
    { scope: mainWrapper }
  );

  

  const mainPannel = useRef();

  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const obj = {
    introRef: introRef.current,
    aboutRef: aboutRef.current,
    expRef: expRef.current,
    workRef: workRef.current,
    contactRef: contactRef.current,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar obj={obj} />
          <div className="wrapper" ref={mainWrapper}>
            <div className="left_pannel">
              <LeftPannel/>
            </div>
            <div className="mid_pannel" id="pannel" ref={mainPannel}>
              <div className="intro_wrapper" ref={introRef}>
                <Intro/>
              </div>
              <div
                className="sections about_wrapper about_section"
                id="about_section"
                ref={aboutRef}
              >
                <About/>
              </div>
              <div
                className="sections experience_wrapper"
                id="experience_section"
                ref={expRef}
              >
                <Experience/>
              </div>
              <div
                className="sections work_wrapper"
                id="work_section"
                ref={workRef}
              >
                <Work/>
              </div>
              <div
                className="sections contact_wrapper"
                id="contact_section"
                ref={contactRef}
              >
                <h1 className="about_heading">
                  <span>01.</span> Contact Me
                </h1>
              </div>
            </div>
            <div className="right_pannel"></div>
          </div>
        </>
      )}
    </>
  );
};
