import React from "react";
import DepartmentRegisterForm from "./DepartmentRegisterForm";
import Sidebar from "../../components/Sidebar";

const DepartmentRegister = () => {
  return (
    <>
      <section className="register__section">
        <Sidebar btn1="Login" btn2="Register" />
        <DepartmentRegisterForm />
      </section>
    </>
  );
};

export default DepartmentRegister;
