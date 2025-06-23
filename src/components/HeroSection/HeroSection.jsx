import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="HeroSection" id="hero-section">
      <div className="Herosection-left">
        <h2>Join the CometChat partner universe </h2>
        <p>
          Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!
        </p>
      </div>
      <div className="Herosection-right">
        <h2>Became a partner</h2>
        <form className="form">
          <div>
            <p>Full name</p>
            <input type="text" placeholder="Type your name here..." required />
          </div>
          <div>
            <p>Email address</p>
            <input type="email" placeholder="Type your emailsomething..." required />
          </div>
          <div>
            <p>Company's name</p>
            <input type="text" placeholder="Type your company's name" required />
          </div>
          <button>Submit application</button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
