import React from "react";
import { NavLink } from "react-router-dom";
import ImageAbout from "./About.png";
import Same from "./Same";
import "../Css/HomeAbout.css";

const About = () => {
  return (
    <>
      <Same
        title="Why Hoop with us"
        text="We are a skills centered academy that aims to produce all round athletes through basketball and life skills training."
        imgsrc={ImageAbout}
        btn="Know More"
      />
    </>
  );
};

export default About;
