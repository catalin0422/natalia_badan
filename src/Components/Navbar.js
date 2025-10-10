
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
         <Link to="home-section" smooth={true} duration={500}>Natalia Badan</Link>
      </div>
      <div className="navbar-links-container">
        {/* Replace anchor tag with Link for Home */}
        <Link to="home-section" smooth={true} duration={500}>Home</Link>
        <Link to="about-section" smooth={true} duration={500}>Bio</Link>
        <Link to="slide-wrapper" smooth={true} duration={500}>Colectie</Link>
        <Link to="contact-section" smooth={true} duration={500}>Contactează-mă</Link>
      </div>
    </nav>
  );
};

export default Navbar;
