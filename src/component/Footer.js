import React from "react";
import TwitterIcon from "./Twitter.jpg";
import LinkedInIcon from "./linkedin.jpg";
import InstagramIcon from "./instagram.jpg";
import FacebookIcon from "./facebook.jpg";
import "../Css/FooterStyle.css";

const Footer = () => {
  return (
    <>
        <div className="container container-flex">
          <div className="icons">
            <TwitterIcon className="icon" />
            <LinkedInIcon className="icon" />
            <InstagramIcon className="icon" />
            <FacebookIcon className="icon" />
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
