import "./Hero.css";

import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Hero;
