import React from "react";

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
          <div className="btn btn__primary ">{prop.btn1}</div>

          <div className="btn btn__primary ">{prop.btn2}</div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
