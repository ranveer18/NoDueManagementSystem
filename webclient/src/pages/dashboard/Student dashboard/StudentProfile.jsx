import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import StudentDashboardSidebar from "./StudentDashboardSidebar";
import ProfileDataForm from "./ProfileDataForm";
const StudentProfile = () => {
  const navigation = useNavigate();
  useEffect(() => {
    verifyUser();
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registration, setRegistration] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const verifyUser = async () => {
    try {
      const res = await fetch("/api/v1/studentAuth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setName(data.name);
      setEmail(data.email);
      setBranch(data.branch);
      setPhone(data.phone);
      setRegistration(data.registration);
      if (res.status === 401 || !data) {
        const error = new Error(res.error);
        console.log(error);
      }
    } catch (error) {
      navigation("/");
      console.log(error);
    }
  };
  const updateUser = () => {};
  return (
    <>
      <section className="dashboard__section">
        <StudentDashboardSidebar />
        <div className="dashboard__form__container">
          <div className="form__data__container">
            <div className="form__profile-pic">
              <img alt="profilepic" />
            </div>
            {/* <ProfileDataForm /> */}
            <form
              action="/basicDetails"
              className="form__data"
              method="POST"
              onSubmit={updateUser}
            >
              <div className="input__div">
                <p className="input__div_p">Full Name:</p>
                <div className="input__container focus">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <input
                    required
                    type="text"
                    className="input"
                    name="name"
                    value={name || ""}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter Your Full Name"
                  />
                </div>
              </div>
              <div className="input__div">
                <p className="input__div_p">Registration Number:</p>
                <div className="input__container focus">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <input
                    required
                    type="text"
                    className="input"
                    name="rollno"
                    value={registration || ""}
                    onChange={(e) => {
                      setRegistration(e.target.value);
                    }}
                    placeholder="Enter Your Registration Number"
                  />
                </div>
              </div>

              <div className="input__div">
                <p className="input__div_p">Email:</p>
                <div className="input__container focus">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <input
                    required
                    type="text"
                    className="input"
                    placeholder="Enter Your Email"
                    name="email"
                    value={email || ""}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="input__div">
                <p className="input__div_p">Mobile Number:</p>
                <div className="input__container focus">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <input
                    required
                    type="text"
                    className="input"
                    placeholder="Enter Your Mobile Number"
                    name="phone"
                    value={phone || ""}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="input__div">
                <p className="input__div_p">Branch:</p>
                <div className="input__container focus">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <input
                    required
                    type="text"
                    className="input"
                    placeholder="Enter Your Branch"
                    name="branch"
                    value={branch || ""}
                    onChange={(e) => {
                      setBranch(e.target.value);
                    }}
                  />
                </div>
              </div>
            </form>
            {/*  */}
            <div className="form__save">
              <button
                type="submit"
                onClick={updateUser}
                className="form__button"
                id="form__save_button"
              >
                <div className="button__icon"></div>
                Update
              </button>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentProfile;
