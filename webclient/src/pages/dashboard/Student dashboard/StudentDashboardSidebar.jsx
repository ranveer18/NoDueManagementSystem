import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const StudentDashboardSidebar = () => {
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
        className={
          showMediaIcons
            ? "dashboard__sidebar showDashboard-sidebar"
            : "dashboard__sidebar"
        }
        id="dashboard__sidebar"
      >
        <div className="sidebar__btns_container">
          <ul className="dashboard__sidebar_ul">
            <NavLink to={`/student`}>
              <li className="dashboard__sidebar_li">
                <div className="dashboard__sidebar_btn">View Profile</div>
              </li>
            </NavLink>
            <NavLink to={`/student/due`}>
              <li className="dashboard__sidebar_li">
                <div className="dashboard__sidebar_btn">View Due</div>
              </li>
            </NavLink>
          </ul>
        </div>
        <NavLink to={`/logout`}>
          <div className="logout__div">
            <BiLogOut />
            <div className="logout__btn">Logout</div>
          </div>
        </NavLink>
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

export default StudentDashboardSidebar;
