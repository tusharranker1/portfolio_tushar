/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
import myself from "../../assets/myself2.png";



export default function About() {
    const [imageHover, setImageHover] = useState(false);
    
    
  return (
    <>
        <h1 className="about_heading">
                  <span>01.</span>&nbsp; About Me{" "}
                  <div className="about_line"></div>
                </h1>
                <div className="about_intro_wrapper">
                  <div className="about_intro_content">
                    <p>
                      Hello! myself Tushar, a passionate React Developer with a
                      deep love for crafting engaging and seamless user
                      interfaces. My journey in the realm of web development is
                      fueled by a curiosity to explore and master the
                      intricacies of React, the JavaScript library that empowers
                      me to transform ideas into interactive and visually
                      stunning applications.
                    </p>
                    <p>
                      In every project, I strive to strike the perfect balance
                      between functionality and aesthetics, understanding that
                      user experience is at the core of successful applications.
                      I'm constantly exploring new features, staying abreast of
                      the latest trends, and pushing the boundaries of what's
                      possible with React.
                    </p>
                    <div>My Tech Stack :</div>
                    <div className="about_tech_stack_content">
                      <ul className="ats_ul1">
                        <li>
                          <KeyboardCapslockIcon
                            style={{
                              color: "#C7B7A3",
                              transform: "scale(0.8)",
                            }}
                          />{" "}
                          Html
                        </li>
                        <li>
                          <KeyboardCapslockIcon
                            style={{
                              color: "#C7B7A3",
                              transform: "scale(0.8)",
                            }}
                          />{" "}
                          CSS
                        </li>
                        <li>
                          <KeyboardCapslockIcon
                            style={{
                              color: "#C7B7A3",
                              transform: "scale(0.8)",
                            }}
                          />{" "}
                          Java Script (ES6+)
                        </li>
                      </ul>
                      <ul className="ats_ul2">
                        <li>
                          <KeyboardCapslockIcon
                            style={{
                              color: "#C7B7A3",
                              transform: "scale(0.8)",
                            }}
                          />{" "}
                          React.js
                        </li>
                        <li>
                          <KeyboardCapslockIcon
                            style={{
                              color: "#C7B7A3",
                              transform: "scale(0.8)",
                            }}
                          />{" "}
                          Node.js
                        </li>
                        <li>
                          <KeyboardCapslockIcon
                            style={{
                              color: "#C7B7A3",
                              transform: "scale(0.8)",
                            }}
                          />{" "}
                          MongoDB
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="about_intro_img">
                    <img
                        className='animateImgGsap'
                      src={myself}
                      style={{
                        transform: imageHover
                          ? "scale(1) translate(-5px, -36px)"
                          : "scale(1) translate(0px, -30px)",
                      }}
                    />
                    <div
                      className="sameSizeImg"
                      onMouseOver={() => {
                        console.log("hovered");
                        setImageHover(true);
                      }}
                      onMouseOut={() => {
                        setImageHover(false);
                      }}
                    ></div>
                  </div>
                </div>
    </>
  )
}
