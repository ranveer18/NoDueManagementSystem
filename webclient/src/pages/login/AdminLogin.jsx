import React from "react";
import LoginForm from "../../components/LoginForm";
import Sidebar from "../../components/Sidebar";

const AdminLogin = () => {
  return (
    <>
      <section className="register__section">
        <Sidebar btn1="Register" btn2="Login" />
        <LoginForm />
      </section>
    </>
  );
};

export default AdminLogin;
