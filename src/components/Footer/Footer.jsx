import "./Footer.css";
import { useState } from "react";

const footerSections = [
  {
    title: "Platform",
    items: [
      { label: "Features", type: "header" },
      "Chat & Messaging",
      "Voice & Video Calls",
      "Security & Compliance",
      "Extensions",
      "Features at a glance",
      "Webhooks & Bots",
      "Moderation",
      "Analytics & Insights",
      { label: "Implementation", type: "header" },
      "Widgets",
      "UI Kits",
      "SDKs & APIs",
      { label: "Technologies", type: "header" },
      "React Chat SDK & API",
      "Angular Chat SDK & API",
      "Vue Chat SDK & API",
      "IOS Swift Chat SDK & API",
      "Android Kotlin Chat SDK & API",
      "Android Java Chat SDK & API",
      "React Native Chat SDK & API",
      "Ionic/Capacitor Chat SDK & API",
      "WordPress Chat SDK & API",
      "Laravel/PHP Chat SDK & API",
      "Flutter Chat SDK & API",
      "Next.js Chat SDK & API",
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "By Use Cases", type: "header" },
      "Social Community",
      "Marketplace",
      "Healthcare",
      "Education",
      "Virtual Events",
      "On-Demand Service",
      "Dating Apps",
      "Gaming",
      { label: "By Organization Type", type: "header" },
      "Enterprise",
      "Startups",
    ],
  },
  {
    title: "Developers",
    items: [
      { label: "Technologies documentation", type: "header" },
      "React",
      "Angular",
      "Vue",
      "IOS Swift",
      "Android Kotlin",
      "Android Java",
      "React Native",
      "Ionic/Capacitor",
      "WordPress",
      "Laravel/PHP",
      "Flutter",
      "Next.js",
      { label: "Documentation", type: "header" },
      "Documentation",
      "Product updates",
      "Tutorials",
      "Open-source Apps",
      "Product status",
      "Glossary",
    ],
  },
  {
    title: "Resources",
    items: ["Customer stories", "Blog", "Give feedback", "Community forum", "Help center", "Partners"],
  },
  {
    title: "Competitors",
    items: ["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Partners", "Pricing", "Chat with us"],
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      {/* Desktop Footer */}
      <footer className="footer footer-desktop">
        <div className="footer-brand">
          <img src="./Images/BrandLogo.png" alt="brand-logo" />
        </div>
        <div className="footer-columns">
          {footerSections.map((section, index) => (
            <div className="footer-column" key={index}>
              <h4>{section.title}</h4>
              <ul>
                {section.items.map((item, i) =>
                  typeof item === "string" ? (
                    <li key={i}>{item}</li>
                  ) : (
                    <li key={i}>
                      <strong>{item.label}</strong>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© 2025 © CometChat</p>
          <div className="footer-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-icons">
            <a href="#">
              <img src="./Images/facebook.png" alt="" /> Facebook
            </a>
            <a href="#">
              <img src="./Images/linkedin.png" alt="" />
              LinkedIn
            </a>
            <a href="#">
              <img src="./Images/instagram.png" alt="" />
              Instagram
            </a>
            <a href="#">
              <img src="./Images/twitter.png" alt="" />
              Twitter
            </a>
            <a href="#">
              <img src="./Images/github.png" alt="" />
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Accordion Footer */}
      <footer className="footer footer-mobile">
        <div className="footer-brand">
          <img src="./Images/BrandLogo.png" alt="brand-logo" />
        </div>
        {footerSections.map((section, index) => (
          <div className="footer-section" key={index}>
            <div className="footer-header" onClick={() => toggle(index)}>
              <h4>{section.title}</h4>
              <span className="toggle-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <ul className="footer-items">
                {section.items.map((item, i) =>
                  typeof item === "string" ? (
                    <li key={i}>{item}</li>
                  ) : (
                    <li key={i}>
                      <strong>{item.label}</strong>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        ))}
        <div className="footer-bottom">
          <div className="footer-icons">
            <a href="#">
              <img src="./Images/facebook.png" alt="" /> Facebook
            </a>
            <a href="#">
              <img src="./Images/linkedin.png" alt="" />
              LinkedIn
            </a>
            <a href="#">
              <img src="./Images/instagram.png" alt="" />
              Instagram
            </a>
            <a href="#">
              <img src="./Images/twitter.png" alt="" />
              Twitter
            </a>
            <a href="#">
              <img src="./Images/github.png" alt="" />
              GitHub
            </a>
          </div>
          <p>© 2025 © CometChat</p>
          <div className="footer-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
