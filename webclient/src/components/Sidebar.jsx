import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
const Sidebar = (prop) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowMediaIcons(!showMediaIcons)}
        className="nav__toggle"
        id="nav-toggle"
      >
        <GiHamburgerMenu />
      </button>
      <aside
        className={showMediaIcons ? "sidebar show-sidebar" : "sidebar"}
        id="sidebar"
      >
        <div className="social__link">
          <ul className="social__link_ul">
            <li className="social__link_li">
              <FaLinkedin />
            </li>
            <li className="social__link_li">
              <FaFacebook />
            </li>
            <li className="social__link_li">
              <FaTwitter />
            </li>
          </ul>
        </div>
        <div className="sidebar__btns">
          <NavLink to="/">
            <div className="btn btn__primary ">Login</div>
          </NavLink>
          <NavLink to="/register">
            <div className="btn btn__primary ">Register</div>
          </NavLink>{" "}
        </div>
        <div
          onClick={() => setShowMediaIcons(!showMediaIcons)}
          className="nav__close"
        >
          <MdClose />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
