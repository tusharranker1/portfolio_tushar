/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../Pages/HomePage.css";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
const tab1Content = () => {
  return (
    <>
      <h1 className="position">
        Web Developer - <span>Intern</span>
      </h1>
      <h3 className="tenure">Aug 2023-Oct 2023</h3>
      <ul>
        <li className="job_points">
          <KeyboardCapslockIcon
            style={{ transform: "scale(0.7) rotateZ(90deg)", color: "#C7B7A3" }}
          />{" "}
          Devised and implemented a voting record management system in PHP,
          resulting in a significant 50% efficiency boost.
        </li>
        <li className="job_points">
          <KeyboardCapslockIcon
            style={{ transform: "scale(0.7) rotateZ(90deg)", color: "#C7B7A3" }}
          />{" "}
          Led ongoing projects and designed new UI for web pages with a 100%
          efficiency rate, contributing to 4 projects.
        </li>
        <li className="job_points">
          <KeyboardCapslockIcon
            style={{ transform: "scale(0.7) rotateZ(90deg)", color: "#C7B7A3" }}
          />{" "}
          Revamped the project's front end, achieving a remarkable 50% reduction
          in code length. Transformation uplifts overall coding performance.
        </li>
        <li className="job_points">
          <KeyboardCapslockIcon
            style={{ transform: "scale(0.7) rotateZ(90deg)", color: "#C7B7A3" }}
          />
          Promoted to Team Leader, expertly managing a team of interns and
          optimizing their daily workload for 6 hours.
        </li>
      </ul>
    </>
  );
};
const tab2Content = () => {
  return (
    <>
      <h1 className="position">
        React Developer - <span>Intern</span>
      </h1>
      <h3 className="tenure"> Feb 2023-May 2023</h3>
      <ul>
        <li className="job_points">
          <KeyboardCapslockIcon
            style={{ transform: "scale(0.7) rotateZ(90deg)", color: "#C7B7A3" }}
          />{" "}
          Undertook roles of Developer and QA for a 3-month internship,
          contributing to project development and quality assurance.
        </li>
        <li className="job_points">
          <KeyboardCapslockIcon
            style={{ transform: "scale(0.7) rotateZ(90deg)", color: "#C7B7A3" }}
          />{" "}
          Integrated the Tracking Page for delivery using the Google Maps
          library in React, achieving 100% similarity to the Figma design.
        </li>
        <li className="job_points">
          <KeyboardCapslockIcon
            style={{ transform: "scale(0.7) rotateZ(90deg)", color: "#C7B7A3" }}
          />{" "}3.	Executed App development on the Agile-Scrum model, resulting in a 30% decrease in bug time and a 15% increase in customer satisfaction ratings.
        </li>
      </ul>
    </>
  );
};

export default function Experience() {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);
  const [lineactive, setLineActive2] = useState(true);
  const [tab,setTab] = useState(false)
  return (
    <>
      <h1 className="about_heading expVersionHeading">
        <span>01.</span>&nbsp;Where I've worked{" "}
        <div className="about_line "></div>
      </h1>
      <div className="exp_content_wrapper">
        <div className="company_header tab_wrapper">
          <button
            className={active ? "tab1 active" : "tab1 unactive"}
            onClick={() => {
              setActive2(false);
              setActive(true);
              setLineActive2(true);
              setTab(false)
            }}
          >
            Next Innovation{" "}
          </button>
          <button
            className={active2 ? "tab2 active" : "tab2 unactive"}
            onClick={() => {
              setActive(false);
              setActive2(true);
              setLineActive2(false);
              setTab(true)
            }}
          >
            FuelCab India{" "}
          </button>
          <div className="tabLine">
            <div
              className="activeLine"
              style={{
                transform: lineactive ? "translateX(0%)" : "translateX(150%)",
              }}
            ></div>
          </div>
        </div>
        <div className="content_tab_wrapper">
          {
            tab? tab2Content() : tab1Content()
          }
        </div>
      </div>
    </>
  );
}
