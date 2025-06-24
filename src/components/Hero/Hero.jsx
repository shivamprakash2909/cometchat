import "./Hero.css";

import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import HeroWrapper from "./HeroWrapper";

const Hero = () => {
  return (
    <HeroWrapper>
      <Navbar />
      <HeroSection />
    </HeroWrapper>
  );
};

export default Hero;
