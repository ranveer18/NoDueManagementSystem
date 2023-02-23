import React from "react";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <>
      <aside className="dashboard__sidebar">
        <div className="sidebar__btns_container">
          <ul className="dashboard__sidebar_ul">
            <li className="dashboard__sidebar_li">
              <div className="dashboard__sidebar_btn">Basic Details</div>
            </li>
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
        <div className="logout__div">
          <NavLink to={`/logout`}>
            <BiLogOut />
            <div className="logout__btn">Logout</div>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
