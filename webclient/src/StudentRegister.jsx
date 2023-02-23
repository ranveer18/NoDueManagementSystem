import React from "react";
import RegisterForm from "./components/RegisterForm";
import Sidebar from "./components/Sidebar";

const StudentRegister = () => {
  return (
    <>
      <section className="register__section">
        <Sidebar btn1="Login" btn2="Register" />
        <RegisterForm />
      </section>
    </>
  );
};

export default StudentRegister;
