import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
const Sidebar = (prop) => {
  return (
    <>
      <aside className="sidebar">
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
          <NavLink to="/login">
            <div className="btn btn__primary ">Login</div>
          </NavLink>
          <NavLink to="/">
            <div className="btn btn__primary ">Register</div>
          </NavLink>{" "}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
