import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Slide from "./Components/Slide";
import Footer from "./Components/Footer";
import React, { useEffect } from "react";
import ReactGA from "react-ga"; // Import React GA

function App() {
  // Initialize Google Analytics with your tracking ID
  useEffect(() => {
    ReactGA.initialize("G-P2W2CCPBPH"); // Replace with your Google Analytics Tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search); // Track the initial page view
  }, []);

  return (
    <div className="App">
      <Home />

      <About />
      <Slide />
      <Footer />
    </div>
  );
}

export default App;

