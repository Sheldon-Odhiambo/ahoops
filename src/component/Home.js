import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageHome from "./homeimg.jpg";
import "../Css/HomeAbout.css";
import Same from "./Same";


const Home=()=>{
    return (
      <>
        <Same
          title="Hoops with Ahoops"
          text="Over the Past years Basketball has really evolved sports in general
          thus we aim to produce all round athletes that can compete anywhere
          in the world with the right age bracket killing the norm of athletes
          faking their age in order for them to compete world wide thus we
          ought to stop all thi for them to compete with individuals from
          other countries same age as them, We are AHoops"
          imgsrc={ImageHome}
          btn="Read More"
        />
      </>
    );
}

export default Home;