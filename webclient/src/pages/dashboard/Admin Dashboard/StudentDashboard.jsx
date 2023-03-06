import React from "react";
import DasboardForm from "../../../components/DasboardForm";
import DashboardSidebar from "../../../components/DashboardSidebar";
// import profilePic from "./images/pp.jpg";
import user from "../../../images/user.svg";

const StudentDashboard = () => {
  return (
    <>
      <section className="dashboard__section">
        <DashboardSidebar />
        <div className="dashboard__form__container">
          <div className="form__data__container">
            <div className="form__profile-pic">
              <img alt="profilepic" src={user} />
            </div>
            <DasboardForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentDashboard;
