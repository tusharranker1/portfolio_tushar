/* eslint-disable no-unused-vars */
import React from 'react'
import myself from "../../assets/myself2.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Intro() {
    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.from('.starting',{opacity:0,y:50,duration:0.5,delay:1.4})
        .from('.name',{opacity:0,y:50,duration:0.7})
        .from('.about',{opacity:0,y:50,duration:0.5})
        .from('.specs',{opacity:0,y:50,duration:0.7})
        
    })
  return (
    <>
        <h1 className="intro starting ">Hi, my name is </h1>
                <h1 className="intro name ">Tushar Kumar.</h1>
                <h1 className="intro about ">I build things for the web.</h1>
                <h1 className="intro specs ">
                  I’m a software engineer specializing in building (and
                  occasionally designing) exceptional digital experiences.
        </h1>
    </>
  )
}
