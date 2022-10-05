import React from "react";
import TwitterIcon from "./Twitter.jpg";
import LinkedInIcon from "./linkedin.jpg";
import InstagramIcon from "./instagram.jpg";
import FacebookIcon from "./facebook.jpg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container container-flex">
            <div className="icons">
                <TwitterIcon />
                <LinkedInIcon />
                <InstagramIcon />
                <FacebookIcon />

            </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
