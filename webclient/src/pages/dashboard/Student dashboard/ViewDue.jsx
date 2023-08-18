import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
import StudentDashboardSidebar from "./StudentDashboardSidebar";

const ViewDue = () => {
  const navigation = useNavigate();
  useEffect(() => {
    verifyUser();
  }, []);
  const [hostelDue, sethostelDue] = useState("");
  const [messDue, setMessDue] = useState("");
  const [libraryDue, setLibraryDue] = useState("");
  const [miscellaneousDue, setmiscellaneousDue] = useState("");
  const [CSEDue, setCSEDue] = useState("");
  const [EEEDue, setEEEDue] = useState("");
  const [CIVILDue, setCIVILDue] = useState("");
  const [MECHDue, setMECHDue] = useState("");
  const verifyUser = async () => {
    try {
      const res = await fetch("/api/v1/studentAuth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      //   console.log(data);
      sethostelDue(data.hostelDue);
      setMessDue(data.messDue);
      setLibraryDue(data.libraryDue);
      setmiscellaneousDue(data.miscellaneousDue);
      setCSEDue(data.CSEDue);
      setEEEDue(data.EEEDue);
      setCIVILDue(data.CIVILDue);
      setMECHDue(data.MECHDue);
      if (res.status === 401 || !data) {
        const error = new Error(res.error);
        console.log(error);
      }
    } catch (error) {
      navigation("/");
      console.log(error);
    }
  };
  //   const updateUser = () => {};
  return (
    <>
      <section className="dashboard__section">
        <StudentDashboardSidebar />
        <div className="dashboard__form__container">
          {/* <h3 className="due_heading">View Due</h3> */}
          <div className="form__data__container">
            <div className="due_container">
              <div className="due_card">
                <div className="due_card__left">
                  <p className="due_card__left_heading">Hostel Due</p>
                  <p className="due_card__left_p">{`Rs. ${hostelDue}`}</p>
                </div>
              </div>
              <div className="due_card">
                <div className="due_card__left">
                  <p className="due_card__left_heading">Mess Due</p>
                  <p className="due_card__left_p">{`Rs. ${messDue}`}</p>
                </div>
              </div>
              <div className="due_card">
                <div className="due_card__left">
                  <p className="due_card__left_heading">Library Due</p>
                  <p className="due_card__left_p">{`Rs. ${libraryDue}`}</p>
                </div>
              </div>
              <div className="due_card">
                <div className="due_card__left">
                  <p className="due_card__left_heading">CSE Department Due</p>
                  <p className="due_card__left_p">{`Rs. ${CSEDue}`}</p>
                </div>
              </div>
              <div className="due_card">
                <div className="due_card__left">
                  <p className="due_card__left_heading">EEE Department Due</p>
                  <p className="due_card__left_p">{`Rs. ${EEEDue}`}</p>
                </div>
              </div>
              <div className="due_card">
                <div className="due_card__left">
                  <p className="due_card__left_heading">CE Department Due</p>
                  <p className="due_card__left_p">{`Rs. ${CIVILDue}`}</p>
                </div>
              </div>
              <div className="due_card">
                <div className="due_card__left">
                  <p className="due_card__left_heading">ME Department Due</p>
                  <p className="due_card__left_p">{`Rs. ${MECHDue}`}</p>
                </div>
              </div>

              <div className="due_card">
                <div className="due_card__left">
                  <p className="due_card__left_heading">Miscellaneous Due</p>
                  <p className="due_card__left_p">{`Rs. ${miscellaneousDue}`}</p>
                </div>
              </div>
            </div>
            <div className="due_card_total">
              <div className="due_card__left">
                <p className="due_card__left_heading">Total Due</p>
                <p className="due_card__left_p">{`Rs. ${
                  hostelDue +
                  messDue +
                  libraryDue +
                  CSEDue +
                  EEEDue +
                  CIVILDue +
                  MECHDue +
                  miscellaneousDue
                }`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewDue;
