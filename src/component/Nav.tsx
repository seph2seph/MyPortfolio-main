import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ Keep this only
import "./Nav.css";

function Nav() {
  return (
    <header className="header">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="site-title">Joseph Portfolio</h2>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/skill">Skill</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
