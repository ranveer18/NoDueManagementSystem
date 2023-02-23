import React from "react";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1/login/department", {
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
      if (data.status === 400 || !data) {
        window.alert("invalid credentials");
      } else {
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="form__container">
        <div className="form_box">
          <div className="form_box__header" style={{ top: "-20.6rem" }}>
            <h1 className="form_box__header_h1">Admin Login</h1>
          </div>

          <div className="login_pic">
            <img src="" aria-hidden alt="image" />
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
    </>
  );
};

export default LoginForm;
