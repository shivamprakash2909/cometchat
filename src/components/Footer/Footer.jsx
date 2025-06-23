import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer" id="footer">
        <a href="#navBar">
          <img src="./Images/BrandLogo.png" className="footer-brand-logo" />
        </a>
        <div className="footer-columns">
          {/* Column 1 - Platform */}
          <div className="footer-column">
            <h4>Platform</h4>
            <ul>
              <li>
                <strong>Features</strong>
              </li>
              <li>Chat & Messaging</li>
              <li>Voice & Video Calls</li>
              <li>Security & Compliance</li>
              <li>Extensions</li>
              <li>Features at a glance</li>
              <li>Webhooks & Bots</li>
              <li>Moderation</li>
              <li>Analytics & Insights</li>
              <li>
                <strong>Implementation</strong>
              </li>
              <li>Widgets</li>
              <li>UI Kits</li>
              <li>SDKs & APIs</li>
              <li>
                <strong>Technologies</strong>
              </li>
              <li>React Chat SDK & API</li>
              <li>Angular Chat SDK & API</li>
              <li>Vue Chat SDK & API</li>
              <li>IOS Swift Chat SDK & API</li>
              <li>Android Kotlin Chat SDK & API</li>
              <li>Android Java Chat SDK & API</li>
              <li>React Native Chat SDK & API</li>
              <li>Ionic/Capacitor Chat SDK & API</li>
              <li>WordPress Chat SDK & API</li>
              <li>Laravel/PHP Chat SDK & API</li>
              <li>Flutter Chat SDK & API</li>
              <li>Next.js Chat SDK & API</li>
            </ul>
          </div>

          {/* Column 2 - Solutions */}
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li>
                <strong>By Use Cases</strong>
              </li>
              <li>Social Community</li>
              <li>Marketplace</li>
              <li>Healthcare</li>
              <li>Education</li>
              <li>Virtual Events</li>
              <li>On-Demand Service</li>
              <li>Dating Apps</li>
              <li>Gaming</li>
              <li>
                <strong>By Organization Type</strong>
              </li>
              <li>Enterprise</li>
              <li>Startups</li>
            </ul>
          </div>

          {/* Column 3 - Developers */}
          <div className="footer-column">
            <h4>Developers</h4>
            <ul>
              <li>
                <strong>Technologies documentation</strong>
              </li>
              <li>React</li>
              <li>Angular</li>
              <li>Vue</li>
              <li>IOS Swift</li>
              <li>Android Kotlin</li>
              <li>Android Java</li>
              <li>React Native</li>
              <li>Ionic/Capacitor</li>
              <li>WordPress</li>
              <li>Laravel/PHP</li>
              <li>Flutter</li>
              <li>Next.js</li>
              <li>
                <strong>Documentation</strong>
              </li>
              <li>Documentation</li>
              <li>Product updates</li>
              <li>Tutorials</li>
              <li>Open-source Apps</li>
              <li>Product status</li>
              <li>Glossary</li>
            </ul>
          </div>

          {/* Column 4 - Resources, Competitors, Company */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Customer stories</li>
              <li>Blog</li>
              <li>Give feedback</li>
              <li>Community forum</li>
              <li>Help center</li>
              <li>Partners</li>
            </ul>
            <br />
            <h4>Competitors</h4>
            <ul>
              <li>SendBird</li>
              <li>GetStream</li>
              <li>Applozic</li>
              <li>Twilio</li>
              <li>PubNub</li>
            </ul>
            <br />
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Pricing</li>
              <li>Chat with us</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©️ 2023 @ CometChat</p>
          <div className="footer-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-icons">
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
