import React from "react";
import Logo from "../Assets/natalia_favicon.png";
import { FaInstagram } from "react-icons/fa";

import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact-section"  className="footer-wrapper">
      <div className="footer-section-one">
        {/* <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div> */}
        <div className="footer-icons">
        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
        </a>
        <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
    <BsYoutube />
        </a>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
       </a>
        </div>
      </div>
      <div className="footer-section-two">
        {/* <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div> */}
        <div className="footer-section-columns">
         <span> </span>
         <span class="footer-heading">Contactează-mă:</span>
          <span>+373 (60) 610 888</span>
          <span>natalia.badan@gmail.com</span>
          <span></span>
          <span></span>
         
        </div>
        {/* <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
