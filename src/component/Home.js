import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageHome from "./Home.jpg";
import "../Css/HomeAbout.css";
import Same from "./Same";


const Home=()=>{
    return (
      <>
        <Same
          title="Life made easy"
          text="We all are living in the 21st century, an
        era of developing technology, and things which were seen as impossible
        in the past are now seen as a daily part of all our lives. Technology is
        the application of scientific knowledge for practical purposes,
        especially in industry. Imagine spending one day with no source of
        technology."
          imgsrc={ImageHome}
          btn="Read More"
        />
      </>
    );
}

export default Home;