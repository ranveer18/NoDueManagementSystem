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
  const [hostelDue, sethostelDue] = useState("");
  const [messDue, setMessDue] = useState("");
  const [libraryDue, setLibraryDue] = useState("");
  const [miscellaneousDue, setmiscellaneousDue] = useState("");
  const [CSEDue, setCSEDue] = useState("");
  const [EEEDue, setEEEDue] = useState("");
  const [CIVILDue, setCIVILDue] = useState("");
  const [MECHDue, setMECHDue] = useState("");
  const [role, setRole] = useState("");
  const [departmentDue, setDepartmentDue] = useState("");

  useEffect(() => {
    getUserById();
    checkRole();
  }, []);

  const checkRole = async () => {
    try {
      const res = await fetch("/api/v1/admin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      //mess

      setRole(data.department);
      // setDepartmentDue(data.department);
      // console.log(departmentDue);
      {
        role === messDue
          ? setDepartmentDue(messDue)
          : setDepartmentDue(hostelDue);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getUserById = async () => {
    try {
      const response = await axios.get(`/api/v1/student/${id}`);

      setName(response.data.name);
      setEmail(response.data.email);
      setRegistration(response.data.registration);
      setPhone(response.data.phone);
      setBranch(response.data.branch);
      sethostelDue(response.data.hostelDue);
      setMessDue(response.data.messDue);
      setLibraryDue(response.data.libraryDue);
      setmiscellaneousDue(response.data.miscellaneousDue);
      setCSEDue(response.data.CSEDue);
      setEEEDue(response.data.EEEDue);
      setCIVILDue(response.data.CIVILDue);
      setMECHDue(response.data.MECHDue);
      // setRole(response.data.role);
    } catch (error) {
      console.log(error);
    }
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/v1/student/${id}`, {
        name,
        // email,
        registration,
        phone,
        branch,
        hostelDue,
        messDue,
        libraryDue,
        miscellaneousDue,
        CSEDue,
        EEEDue,
        CIVILDue,
        MECHDue,
      });
      alert(`Updated ${name} details`);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {role === "admin" ? (
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
          {/* due  */}
          <div className="input__div">
            <p className="input__div_p">Hostel Due:</p>
            <div className="input__container focus">
              <div className="icon">
                <FaUser />
              </div>
              <input
                required
                type="number"
                className="input"
                placeholder={hostelDue}
                name="hostelDue"
                value={hostelDue}
                onChange={(e) => {
                  sethostelDue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="input__div">
            <p className="input__div_p">Mess Due:</p>
            <div className="input__container focus">
              <div className="icon">
                <FaUser />
              </div>
              <input
                required
                type="number"
                className="input"
                placeholder="Mess Due"
                name="messDue"
                value={messDue}
                onChange={(e) => {
                  setMessDue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="input__div">
            <p className="input__div_p">Library Due:</p>
            <div className="input__container focus">
              <div className="icon">
                <FaUser />
              </div>
              <input
                required
                type="number"
                className="input"
                placeholder="Library Due"
                name="libraryDue"
                value={libraryDue}
                onChange={(e) => {
                  setLibraryDue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="input__div">
            <p className="input__div_p">CSE Department Due:</p>
            <div className="input__container focus">
              <div className="icon">
                <FaUser />
              </div>
              <input
                required
                type="number"
                className="input"
                placeholder="CSE Department Due"
                name="CSEDue"
                value={CSEDue}
                onChange={(e) => {
                  setCSEDue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="input__div">
            <p className="input__div_p">EEE Department Due :</p>
            <div className="input__container focus">
              <div className="icon">
                <FaUser />
              </div>
              <input
                required
                type="number"
                className="input"
                placeholder="EEE Department Due"
                name="EEEDue"
                value={EEEDue}
                onChange={(e) => {
                  setEEEDue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="input__div">
            <p className="input__div_p">CE Department Due :</p>
            <div className="input__container focus">
              <div className="icon">
                <FaUser />
              </div>
              <input
                required
                type="number"
                className="input"
                placeholder="CIVIL Department Due"
                name="CIVILDue"
                value={CIVILDue}
                onChange={(e) => {
                  setCIVILDue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="input__div">
            <p className="input__div_p">ME Department Due :</p>
            <div className="input__container focus">
              <div className="icon">
                <FaUser />
              </div>
              <input
                required
                type="number"
                className="input"
                placeholder="MECH Department Due "
                name="MECHDue"
                value={MECHDue}
                onChange={(e) => {
                  setMECHDue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="input__div">
            <p className="input__div_p">Miscellaneous Due:</p>
            <div className="input__container focus">
              <div className="icon">
                <FaUser />
              </div>
              <input
                required
                type="number"
                className="input"
                placeholder="Miscellaneous Due"
                name="miscellaneousDue"
                value={miscellaneousDue}
                onChange={(e) => {
                  setmiscellaneousDue(e.target.value);
                }}
              />
            </div>
          </div>
          {/*  */}
        </form>
      ) : (
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
          {/* due  */}
          {role === "messDue" ? (
            <div className="input__div">
              <p className="input__div_p">{role} :</p>
              <div className="input__container focus">
                <div className="icon">
                  <FaUser />
                </div>
                <input
                  required
                  type="number"
                  className="input"
                  placeholder={role}
                  name="messDue"
                  value={messDue}
                  onChange={(e) => {
                    setMessDue(e.target.value);
                  }}
                />
              </div>
            </div>
          ) : role === "library" ? (
            <div className="input__div">
              <p className="input__div_p">{role} :</p>
              <div className="input__container focus">
                <div className="icon">
                  <FaUser />
                </div>
                <input
                  required
                  type="number"
                  className="input"
                  placeholder={role}
                  name="libraryDue"
                  value={libraryDue}
                  onChange={(e) => {
                    setLibraryDue(e.target.value);
                  }}
                />
              </div>
            </div>
          ) : role === "cse" ? (
            <div className="input__div">
              <p className="input__div_p">{role} Department Due :</p>
              <div className="input__container focus">
                <div className="icon">
                  <FaUser />
                </div>
                <input
                  required
                  type="number"
                  className="input"
                  placeholder={role}
                  name="CSEDue"
                  value={CSEDue}
                  onChange={(e) => {
                    setCSEDue(e.target.value);
                  }}
                />
              </div>
            </div>
          ) : role === "hostel" ? (
            <div className="input__div">
              <p className="input__div_p">{role} Department Due :</p>
              <div className="input__container focus">
                <div className="icon">
                  <FaUser />
                </div>
                <input
                  required
                  type="number"
                  className="input"
                  placeholder="Hostel Due"
                  name="hostelDue"
                  value={hostelDue}
                  onChange={(e) => {
                    sethostelDue(e.target.value);
                  }}
                />
              </div>
            </div>
          ) : role === "eee" ? (
            <div className="input__div">
              <p className="input__div_p">{role} Department Due :</p>
              <div className="input__container focus">
                <div className="icon">
                  <FaUser />
                </div>
                <input
                  required
                  type="number"
                  className="input"
                  placeholder="EEE Due"
                  name="EEEDue"
                  value={EEEDue}
                  onChange={(e) => {
                    setEEEDue(e.target.value);
                  }}
                />
              </div>
            </div>
          ) : role === "civil" ? (
            <div className="input__div">
              <p className="input__div_p">{role} Department Due :</p>
              <div className="input__container focus">
                <div className="icon">
                  <FaUser />
                </div>
                <input
                  required
                  type="number"
                  className="input"
                  placeholder="CIVIL Due"
                  name="CIVILDue"
                  value={CIVILDue}
                  onChange={(e) => {
                    setCIVILDue(e.target.value);
                  }}
                />
              </div>
            </div>
          ) : role === "mech" ? (
            <div className="input__div">
              <p className="input__div_p">{role} Department Due :</p>
              <div className="input__container focus">
                <div className="icon">
                  <FaUser />
                </div>
                <input
                  required
                  type="number"
                  className="input"
                  placeholder="MECH Due"
                  name="MECHDue"
                  value={MECHDue}
                  onChange={(e) => {
                    setMECHDue(e.target.value);
                  }}
                />
              </div>
            </div>
          ) : (
            () => {
              return null;
            }
          )}
        </form>
      )}
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
