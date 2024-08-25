/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LeftPannel() {
  const [linkColor, setLinkColor] = useState(false);
  const [linkColor1, setLinkColor1] = useState(false);
  const [linkColor2, setLinkColor2] = useState(false);
  const [linkColor3, setLinkColor3] = useState(false);

  const handleMouseOver = () => {
    setLinkColor(true);
  };
  const handleMouseOut = () => {
    setLinkColor(false);
  };
  const handleMouseOver1 = () => {
    setLinkColor1(true);
  };
  const handleMouseOut1 = () => {
    setLinkColor1(false);
  };
  const handleMouseOver2 = () => {
    setLinkColor2(true);
  };
  const handleMouseOut2 = () => {
    setLinkColor2(false);
  };
  const handleMouseOver3 = () => {
    setLinkColor3(true);
  };
  const handleMouseOut3 = () => {
    setLinkColor3(false);
  };
  //   animation
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.line',{height:0,duration:0.4,delay:3.2})
    .from(".sb1",{y:60,opacity:0,duration:0.3})
    .from(".sb2",{y:60,opacity:0,duration:0.3})
    .from(".sb3",{y:60,opacity:0,duration:0.3})
    .from(".sb4",{y:60,opacity:0,duration:0.3})
  });
  return (
    <>
      <Link to="mailto:tusharkumar2002working@gmail.com" target="__blank">
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="socialBox sb1"
        >
          <EmailIcon
            className="animateIcon"
            style={{
              marginTop: "35px",
              fontSize: "24px",
              color: linkColor ? "#C7B7A3" : "#b24d46dc",
              transform: linkColor
                ? "translateY(-5px) scale(1.03)"
                : "translateY(0px) scale(1)",
              transition: "0.5s",
            }}
          />
        </div>
      </Link>
      <Link to="https://www.instagram.com/tusharrr__4/" target="__blank">
        <div
        
          className="socialBox sb2"
          onMouseOver={handleMouseOver1}
          onMouseOut={handleMouseOut1}
        >
          <InstagramIcon
          className="animateIcon"
            style={{
              marginTop: "35px",
              fontSize: "24px",
              color: linkColor1 ? "#C7B7A3" : "#b24d46dc",

              transform: linkColor1
                ? "translateY(-5px) scale(1.03)"
                : "translateY(0px) scale(1)",
              transition: "0.5s",
            }}
          />
        </div>
      </Link>
      <Link to="https://github.com/tusharranker1" target="__blank">
        <div
          className="socialBox sb3"
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}
        >
          <GitHubIcon
          className="animateIcon"
            style={{
              marginTop: "35px",
              fontSize: "24px",
              color: linkColor2 ? "#C7B7A3" : "#b24d46dc",
              transform: linkColor2
                ? "translateY(-5px) scale(1.03)"
                : "translateY(0px) scale(1)",
              transition: "0.5s",
            }}
          />
        </div>
      </Link>
      <Link to="https://www.linkedin.com/in/tushar2024kumar/" target="__blank">
        <div
          className="socialBox sb4"
          onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3}
        >
          <LinkedInIcon
          className="animateIcon"
            style={{
              marginTop: "35px",
              fontSize: "24px",
              color: linkColor3 ? "#C7B7A3" : "#b24d46dc",
              transform: linkColor3
                ? "translateY(-5px) scale(1.03)"
                : "translateY(0px) scale(1)",
              transition: "0.5s",
            }}
          />
        </div>
      </Link>
      <div className="line"></div>
    </>
  );
}
