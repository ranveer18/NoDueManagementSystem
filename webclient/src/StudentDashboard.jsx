import React from "react";
import DasboardForm from "./components/Student dashboard/DasboardForm";
import DashboardSidebar from "./components/DashboardSidebar";
import profilePic from "./images/pp.jpg";

const StudentDashboard = () => {
  return (
    <>
      <section className="dashboard__section">
        <DashboardSidebar />
        <div className="dashboard__form__container">
          <div className="form__data__container">
            <div className="form__profile-pic">
              <img src={profilePic} alt="profilepic" />
            </div>
            <DasboardForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentDashboard;
