import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
const DasboardForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registration, setRegistration] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");

  useEffect(() => {
    getUserById();
  }, []);
  const getUserById = async () => {
    try {
      const response = await axios.get(`/api/v1/student/${id}`);

      setName(response.data.name);
      setEmail(response.data.email);
      setRegistration(response.data.registration);
      setPhone(response.data.phone);
      setBranch(response.data.branch);
    } catch (error) {
      console.log(error);
    }
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/v1/student/${id}`, {
        name,
        // registration,
      });
      alert(`Thanku ${name} /api/v1/student/${id} to reach us...`);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  // const deleteUser = async (id) => {
  //   try {
  //     // await axios.delete(`http://192.168.0.105:5050/api/v1/student/${id}`);
  //     // navigation.navigate("Home");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
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
    </>
  );
};

export default DasboardForm;
