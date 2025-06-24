import "./PreFooter.css";
import PreFooterWrapper from "./PreFooterWrapper";

const PreFooter = () => {
  return (
    <PreFooterWrapper>
      <div className="cta-section" id="prefooter">
        <h2>Get started for free</h2>
        <p>
          Build and test for as long as you need.
          <br />
          Pick a plan when you're ready.
        </p>
        <div className="cta-buttons">
          <button className="btn-outline">Start free trial</button>
          <button className="btn-filled">Schedule a demo</button>
        </div>
      </div>
    </PreFooterWrapper>
  );
};

export default PreFooter;
