import React from "react";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <>
      <aside className="dashboard__sidebar">
        <div className="sidebar__btns_container">
          <ul className="dashboard__sidebar_ul">
            <NavLink to={`/`}>
              <li className="dashboard__sidebar_li">
                <div className="dashboard__sidebar_btn">Add Student</div>
              </li>
            </NavLink>
            {/* <li className="dashboard__sidebar_li">
              <div className="dashboard__sidebar_btn">Family Details</div>
            </li>
            <li className="dashboard__sidebar_li">
              <div className="dashboard__sidebar_btn">Educational Details</div>
            </li>
            <li className="dashboard__sidebar_li">
              <div className="dashboard__sidebar_btn">Account Details</div>
            </li> */}
          </ul>
        </div>
        <NavLink to={`/logout`}>
          <div className="logout__div">
            <BiLogOut />
            <div className="logout__btn">Logout</div>
          </div>
        </NavLink>
      </aside>
    </>
  );
};

export default DashboardSidebar;
