import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar" id="navBar">
      <Link to="/">
        <img src="./Images/BrandLogo.png" className="logo" alt="brand-logo" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <a href="#hero-section">Platform</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#footer">Solutions</a>
        </li>
        <li>
          {" "}
          <a href="#footer">Developers</a>
        </li>
        <li>
          {" "}
          <a href="#footer">Resources</a>
        </li>
        <li>
          {" "}
          <a href="#prefooter">Pricing</a>
        </li>
      </ul>
      <div className="navbar-right">
        <div className="button-section">
          <Link style={{ textDecoration: "none", color: "inherit" }}>
            <p>Log in</p>
          </Link>
          <button>Schedule a demo</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
