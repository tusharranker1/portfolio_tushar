/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../Pages/HomePage.css";
import lms from '../../assets/HomePage.png'
import chat from '../../assets/chat.jpg'
import icon1 from '../../assets/TypeScript.png'
import icon2 from '../../assets/React.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';


export default function Experience() {
  const [color,setColor] = useState(false);
  
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
        <div className="project-wrapper">
          <div className="projectHeading">Exam Preparation Website</div>
          <div className="projectContent">Welcome to <span>Exam Prep</span> —your ultimate study partner for exam success! Whether you're preparing for high school finals, college entrance tests, or professional certification exams, we’ve got you covered.</div>
          <div className="icons">
          <img className="i1" src={icon1}/>
          <img className="i2" src={icon2}/>
          
          <Link to="https://github.com/tusharranker1" target="__blank"><GitHubIcon style={{color:'d7c0a4',fontSize:'35px',marginLeft:'10px'}}/></Link>
        </div>
        </div>
        
        </div>
        <div className="project project2">
        <div className="coverImg"></div>
        <img src={chat}/>
        <div className="project-wrapper">
          <div className="projectHeading">Chat Room</div>
          <div className="projectContent">Welcome to <span>Chat App</span>—the dynamic and engaging chat room web app where conversations come to life! </div>
          <div className="icons">
          
          <JavascriptIcon style={{color:'d7c0a4',fontSize:'65px',marginLeft:'10px'}}/>
          <StorageIcon style={{color:'d7c0a4',fontSize:'45px',marginLeft:'10px',marginRight:'10px'}}/>
          
          <Link to="https://github.com/tusharranker1/NodechatApp" target="__blank"><GitHubIcon style={{color:'d7c0a4',fontSize:'35px',marginLeft:'10px'}}/></Link>
        </div>
        </div>
        
        </div>
      </div>
    </>
  );
}
