import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaUser, FaUserGraduate, FaLock } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";

const RegisterForm = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("/api/v1/register/Student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputs.name,
          email: inputs.email,
          phone: inputs.phone,
          batch: inputs.batch,
          branch: inputs.branch,
          password: inputs.password,
          cpassword: inputs.cpassword,
          registration: inputs.registration,
        }),
      });
      const data = response.json();
      console.log(data);
      if (data.status === 400 || !data) {
        window.alert("invalid credentials");
      } else if (data.status === 422) {
        window.alert("email already exit");
      } else {
        window.alert("Success! Please check your email to verify account");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="form__container">
        <div className="form_header">
          <NavLink to={`/`}>
            <div className="form_box__header">
              <h1 className="form_box__header_h1">Student Register</h1>
            </div>
          </NavLink>
          {/* <NavLink to={""}> */}
          <div
            className="form_box__header"
            style={{ backgroundColor: "#d9d9d9" }}
          >
            <h1 className="form_box__header_h1"></h1>
          </div>
          {/* </NavLink> */}
        </div>
        <div className="form_box">
          <div className="form_box__body">
            <form onSubmit={handleSubmit} className="contact__form">
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
                  name="registration"
                  value={inputs.registration || ""}
                  onChange={handleChange}
                  className="input"
                  placeholder="Registered Number"
                />
              </div>
              <div className="input__container focus">
                <div className="icon">
                  <FaUserGraduate />
                </div>
                <input
                  required
                  type="input"
                  name="phone"
                  value={inputs.phone || ""}
                  onChange={handleChange}
                  className="input"
                  placeholder="phone Number"
                />
              </div>
              <div className="input__container focus">
                <div className="icon">
                  <FaUserGraduate />
                </div>
                <input
                  required
                  type="input"
                  name="batch"
                  value={inputs.batch || ""}
                  onChange={handleChange}
                  className="input"
                  placeholder="batch"
                />
              </div>
              <div className="input__container focus">
                <div className="icon">
                  <FaUserGraduate />
                </div>
                <input
                  required
                  type="input"
                  name="branch"
                  value={inputs.branch || ""}
                  onChange={handleChange}
                  className="input"
                  placeholder="branch"
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
