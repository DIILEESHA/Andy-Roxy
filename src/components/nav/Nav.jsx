import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav_container">
      <div className="nav_sides">
        <div className="nav_logo_img">
          <Link to="/">
            <img
              src="https://i.imgur.com/6WzLBpv.png"
              alt="ar logo"
              className="nav_logo"
            />
          </Link>
        </div>
      </div>
      <div className="nav_sides">
        <ul className="nav_ul">
          <Link className="a" to="/ceremony-reception">
            <li className="nav_li">Ceremony & Reception</li>
          </Link>
          <Link to="/accomondation" className="a">
            <li className="nav_li">Accomodations</li>
          </Link>
          <Link to="/Explore-Croatia" className="a">
            <li className="nav_li">Explore Croatia</li>
          </Link>
          <Link to="/rsvp" className="a">
            <li className="nav_li lala">Rsvp</li>
          </Link>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose className="ico" /> : <IoMenu className="ico" />}
        </div>
      </div>

      <div className={`nav_mobile_menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav_ul_mobile">
          <Link className="a" to="/ceremony-reception" onClick={toggleMenu}>
            <li className="nav_li_mobile">Ceremony & Reception</li>
          </Link>
          <Link to="/accomondation" className="a" onClick={toggleMenu}>
            <li className="nav_li_mobile">Accomodations</li>
          </Link>
          <Link to="/Explore-Croatia" className="a" onClick={toggleMenu}>
            <li className="nav_li_mobile">Explore Croatia</li>
          </Link>
          <Link to="/rsvp" className="a" onClick={toggleMenu}>
            <li className="nav_li_mobile lala">Rsvp</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;