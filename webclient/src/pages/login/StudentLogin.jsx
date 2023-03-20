import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Launda from "../../images/launda.svg"
const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1/login/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = response.json();
      if (response.status === 400 || !data) {
        window.alert("invalid credentials");
      } else if (response.status === 401) {
        window.alert("Vefiy your email first");
      } else {
        navigate("/student");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="register__section">
        <Sidebar />

        <div className="form__container">
          <div className="form_header">
            <NavLink to={`/`}>
              <div
                className="form_box__header"
                style={{ backgroundColor: "#F0F4FA" }}
              >
                <h1 className="form_box__header_h1">Admin Login</h1>
              </div>
            </NavLink>
            <NavLink to={"/studentLogin"}>
              <div className="form_box__header">
                <h1 className="form_box__header_h1">Student Login</h1>
              </div>
            </NavLink>
          </div>
          <div className="form_box login_form_height">
            <div className="login_pic">
              <img src={Launda} aria-hidden alt="image" width="280px" height="200px"/>
            </div>
            <div className="form_box__body">
              <form
                method="POST"
                onSubmit={handleSubmit}
                className="contact__form"
              >
                <div className="input__container focus">
                  <div className="icon">
                    <BsFillEnvelopeFill />
                  </div>
                  <input
                    required
                    type="email"
                    name="email"
                    value={email || ""}
                    // onChange={handleChange}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="input"
                    placeholder="Email"
                  />
                </div>

                <div className="input__container focus">
                  <div className="icon">
                    <FaLock />
                  </div>

                  <input
                    required
                    type="password"
                    name="password"
                    value={password || ""}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="input"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" className="form__button">
                  <div className="button__icon"></div>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentLogin;
