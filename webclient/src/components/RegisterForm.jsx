import React from "react";
import { useState } from "react";

import { FaUser, FaUserGraduate, FaLock } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";

const RegisterForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    alert(`Thanku ${event.target[0].value} to reach us...`);
  };
  return (
    <>
      <div className="form__container">
        <div className="form_box">
          <div className="form_box__header">
            <h1 className="form_box__header_h1">Student Register</h1>
          </div>
          <div className="form_box__body">
            <form
              action="/register"
              method="POST"
              onSubmit={handleSubmit}
              className="contact__form"
            >
              <div className="input__container focus">
                <div className="icon">
                  <FaUser />
                </div>
                <input
                  required
                  type="text"
                  className="input"
                  name="name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
              </div>
              <div className="input__container focus">
                <div className="icon">
                  <BsFillEnvelopeFill />
                </div>
                <input
                  required
                  type="email"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                  className="input"
                  placeholder="Email"
                />
              </div>
              <div className="input__container focus">
                <div className="icon">
                  <FaUserGraduate />
                </div>
                <input
                  required
                  type="input"
                  name="rollno"
                  value={inputs.rollno || ""}
                  onChange={handleChange}
                  className="input"
                  placeholder="Registered Number"
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
                  value={inputs.password || ""}
                  onChange={handleChange}
                  className="input"
                  placeholder="Password"
                />
              </div>
              <div className="input__container focus">
                <div className="icon">
                  <FaLock />
                </div>
                <input
                  required
                  type="cpassword"
                  name="cpassword"
                  value={inputs.cpassword || ""}
                  onChange={handleChange}
                  className="input"
                  placeholder="Confirm Password"
                />
              </div>

              <button type="submit" className="form__button">
                <div className="button__icon"></div>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
