import React from "react";
import { CssBaselinefrom } from "@mui/material";
import Box from "@mui/material";
import Typography from "@mui/material";
import Container from "@mui/material";
import Link from "@mui/material"
import { FiInstagram} from "react-icons/fi";

function CopyRight(){
    
}


const Footer = () => {
  return (
    <>
      <div className="container container-flex">
        <div className="icons">
          {/* <TwitterIcon className="icon" />
          <LinkedInIcon className="icon" />
          <InstagramIcon className="icon" />
          <FacebookIcon className="icon" /> */}
        </div>
        <div className="line">
          <hr />
          <hr />
        </div>
        <div className="copyright">
          <p>All rights reserved &copy;</p>
          <p>Made with love by Mitch</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
