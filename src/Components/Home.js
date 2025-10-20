import React from "react";
import Navbar from "./Navbar";
import Hero from "../Assets/Pictura20.webp";
import { Link } from "react-scroll";


const Home = () => {
    return (
      <div className="home-container">
        <img className="hero-section" src={Hero} alt="Natalia-Badan" loading="lazy"/>
        <Navbar />
        {}
          { <div className="home-banner-container">
            <div className="home-text-section">
              <h1 className="primary-heading">
                    O capodoperă adevărată nu spune totul
              </h1>
                 <Link class = "menu-button"to="slide-wrapper" smooth={true} duration={500} className="secondary-button">Descopera colectia</Link>
      
            </div>
          </div> }
        </div>
    );
  };
  
  export default Home;
  
