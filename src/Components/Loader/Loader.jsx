/* eslint-disable no-unused-vars */
import React from "react";
import "./Loader.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Loader = () => {
  const wrapper = useRef(null);
  useGSAP(
    () => {
      let tl1 = gsap.timeline();
      let tl2 = gsap.timeline();
      let tl3 = gsap.timeline();
      tl1
        .from(".label", { opacity: 0, x: -100, duration: 1 })
        .to(".box1", { y: -10, scale: 0.5, duration: 0.6, delay: 0.7 });

      tl2
        .from(".box1", { opacity: 0, x: -100, duration: 1 })
        .fromTo(
          ".box1",
          { scale: 0.7 },
          { scale: 1, duration: 0.7, ease: "expoScale(0.5,7,none)" }
        )
        .to(".contentName1", { y: -30, duration: 0.7, opacity: 1 })
        .to(".contentName1", {
          y: -60,
          duration: 0.5,
          opacity: 0,
        })
        .to(".contentName2", { y: -30, duration: 0.7, opacity: 1 })
        .to(".contentName2", {
          y: -60,
          duration: 0.5,
          opacity: 0,
        })
        .to(".contentName3", { y: -30, duration: 0.7, opacity: 1 })
        .to(".contentName3", {
          y: -60,
          duration: 0.5,
          opacity: 0,
        }).to(".contentName4", { y: -30, duration: 0.7, opacity: 1 })
        .to(".contentName4", {
          y: -60,
          duration: 0.5,
          opacity: 0,
        }).to('.box1',{left:60,top:-5,duration:1,ease: "expoScale(0.5,7,none)"})
      tl3.to(".label", { y: -10, scale: 0.5, delay: 1.7, duration: 0.6 }).to('.label',{left:107,top:10,duration:1,delay:4.2,ease: "expoScale(0.5,7,none)"});
    },
    { scope: wrapper }
  );
  return (
    <div className="loader-wrapper" ref={wrapper}>
      <div className="box1"></div>
      <div className="label">T</div>
      <div className="content">
        <div className="contentName contentName1">Developer</div>
        <div className="contentName contentName2">Code</div>
        <div className="contentName contentName3">Creator</div>
        <div className="contentName contentName4">Designer</div>
      </div>
    </div>
  );
};
