import "./PreFooterWrapper.css";

const PreFooterWrapper = ({ children }) => {
  return (
    <div className="prefooter-wrapper">
      {/* Star field background */}
      <div className="stars-wrapper">
        {[...Array(20)].map((_, index) => (
          <div key={index} className={`star star-${index + 1}`}></div>
        ))}
      </div>

      {/* Animated planets */}
      <div className="planet planet-pink-large"></div>
      <div className="planet planet-orange-medium"></div>
      <div className="planet planet-purple-small"></div>
      <div className="planet planet-blue-tiny"></div>

      {/* Main content */}
      <div id="PreFooter-children-wrapper">{children}</div>
    </div>
  );
};

export default PreFooterWrapper;
