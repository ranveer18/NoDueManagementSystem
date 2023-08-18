import React, { useState, useEffect } from "react";
import DasboardForm from "../../../components/DasboardForm";
import DashboardSidebar from "../../../components/DashboardSidebar";
import DepartmentSidebar from "../../../components/DepartmentSidebar";
// import profilePic from "./images/pp.jpg";
import user from "../../../images/user.svg";

const StudentDashboard = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    checkRole();
  }, []);
  const checkRole = async () => {
    try {
      const res = await fetch("/api/v1/admin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setRole(data.department);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="dashboard__section">
        {role === "admin" ? (
          <DashboardSidebar />
        ) : (
          <DepartmentSidebar dep={role} />
        )}{" "}
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
