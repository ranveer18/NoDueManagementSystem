import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../../../components/DashboardSidebar";
import FilterSection from "./FilterSection";
import DepartmentSidebar from "../../../components/DepartmentSidebar";
import ShowData from "./ShowData";
const AdminDashboard = () => {
  const [role, setRole] = useState("");

  const navigation = useNavigate();
  useEffect(() => {
    verifyUser();
    checkRole();
  });
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
  const verifyUser = async () => {
    try {
      const res = await fetch("/api/v1/admin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.status === 400 || !data) {
        const error = new Error(res.error);
        console.log(error);
      }
    } catch (error) {
      navigation("/");
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
        )}
        <div className="dashboard__form__container" style={{ padding: "2rem" }}>
          {/* <FilterSection /> */}
          <ShowData />
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
