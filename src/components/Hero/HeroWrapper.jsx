import "./HeroWrapper.css";

const HeroWrapper = ({ children }) => {
  return (
    <div id="hero-wrapper">
      <div className="absolute inset-0">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        <div className="star star-7"></div>
        <div className="star star-8"></div>
        <div className="star star-9"></div>
        <div className="star star-10"></div>
        <div className="star star-11"></div>
        <div className="star star-12"></div>
        <div className="star star-13"></div>
        <div className="star star-14"></div>
        <div className="star star-15"></div>
      </div>
      <div className="planet planet-purple-large"></div>
      <div className="planet planet-orange"></div>
      <div className="planet planet-pink-large"></div>
      <div className="planet planet-purple-small"></div>
      <div className="planet planet-blue-small"></div>

      <div id="hero-children-wrapper">{children}</div>
    </div>
  );
};

export default HeroWrapper;
