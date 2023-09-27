import { Link } from "react-scroll";
import logo from "../asset/logo.jpg";
import contactImg from "../asset/contact.png";
import menu from "../asset/menu.png";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="nav-lists">
          <Link
            activeClass="active"
            to="intro"
            offset={-230}
            smooth={true}
            spy={true}
            duration={500}
            className="navListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            offset={-120}
            smooth={true}
            spy={true}
            duration={500}
            className="navListItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            offset={-120}
            smooth={true}
            spy={true}
            duration={500}
            className="navListItem"
          >
            Portfolio
          </Link>
        </div>
        <div className="nav-button">
          <button
            className="navBtn"
            onClick={() => {
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <img src={contactImg} alt="contactImg" className="contactImg" />
            Contact Me
          </button>

         
           </div>
           <div className="mbMenu">
            <img
              src={menu}
              alt="logo"
              className="menu-logo"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          <div
            className="mbMenuBar"
            style={{ display: showMenu ? "flex" : "none" }}>
            <Link
              activeClass="active"
              to="intro"
              offset={-230}
              smooth={true}
              spy={true}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="skills"
              offset={-120}
              smooth={true}
              spy={true}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="portfolio"
              offset={-120}
              smooth={true}
              spy={true}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            >
              Portfolio
                 </Link>
                 <Link
              activeClass="active"
              to="contact"
              offset={-120}
              smooth={true}
              spy={true}
              duration={500}
              className="listItem"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </Link>
          </div>
      </nav>
    </>
  );
};

export default Header;
