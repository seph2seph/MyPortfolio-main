import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import homeIcon from "./assets/home-button.png";
import aboutIcon from "./assets/about.png";
import skillIcon from "./assets/skills.png";
import projectIcon from "./assets/project.png";
import contactIcon from "./assets/contact.png";
import "./Nav.css";

function Nav() {
  return (
    <header className="header">
      <nav className="side-nav open">
        <Link to="/" className="profile">
          <img src={logo} alt="Profile Logo" className="logo" />
          <h2>My Portfolio</h2>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <img src={homeIcon} alt="Home Icon" className="nav-icon" />
              Profile
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img src={aboutIcon} alt="About Icon" className="nav-icon" />
              About me
            </Link>
          </li>
          <li>
            <Link to="/skill">
              <img src={skillIcon} alt="Skill Icon" className="nav-icon" />
              Skill
            </Link>
          </li>
          <li>
            <Link to="/project">
              <img src={projectIcon} alt="Project Icon" className="nav-icon" />
              Project
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <img src={contactIcon} alt="Contact Icon" className="nav-icon" />
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
