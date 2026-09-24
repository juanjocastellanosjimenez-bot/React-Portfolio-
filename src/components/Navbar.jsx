import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

// Main navigation: logo on the left, one link per page on the right.
const links = [["/", "Home"], ["/about", "About"], ["/projects", "Projects"], ["/education", "Education"], ["/services", "Services"], ["/contact", "Contact"]];

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand"><Logo /><span>Juan</span></NavLink>
      <nav aria-label="Main">
        {links.map(([path, label]) => <NavLink key={path} to={path} end={path === "/"}>{label}</NavLink>)}
      </nav>
    </header>
  );
}
