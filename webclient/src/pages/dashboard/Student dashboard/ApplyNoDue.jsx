import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentDashboardSidebar from "./StudentDashboardSidebar";
const ApplyNoDue = () => {
  const navigation = useNavigate();
  useEffect(() => {
    verifyUser();
  }, []);
  const [amountToPaid, setAmountToPaid] = useState(0);
  const verifyUser = async () => {
    try {
      const res = await fetch("/api/v1/studentAuth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setAmountToPaid(
        data.hostelDue +
          data.messDue +
          data.libraryDue +
          data.CSEDue +
          data.EEEDue +
          data.CIVILDue +
          data.MECHDue +
          data.miscellaneousDue
      );
      if (res.status === 401 || !data) {
        const error = new Error(res.error);
        console.log(error);
      }
    } catch (error) {
      navigation("/");
      console.log(error);
    }
  };

  const handleNoDueApply = (amountToPaid) => {
    if (amountToPaid == 0) {
      alert(
        "Thanks for Applying for No Due. You will get a mail once approved!"
      );
    } else {
      alert("Please clear your due before applying!");
    }
  };
  return (
    <>
      <section className="dashboard__section">
        <StudentDashboardSidebar />
        <div className="dashboard__form__container">
          <div className="form__data__container">
            <div className="due_container">
              <h2 style={{ fontSize: "20px" }}>Apply for No Due</h2>
            </div>
            <div
              className="due_container"
              style={{ fontSize: "20px", textAlign: "center" }}
            >
              Kindly clear all your dues before applying for No Due.
            </div>
            <div
              className="due_container"
              style={{ fontSize: "20px", margin: "0px", color: "red" }}
            >
              Your Total due amount to be paid: {`Rs. ${amountToPaid}`}
            </div>
            <div
              className="due_container"
              style={{ fontSize: "20px", margin: "0px" }}
            >
              <button
                type="submit"
                className="form__button"
                onClick={() => handleNoDueApply(amountToPaid)}
              >
                <div className="button__icon"></div>
                Click to Apply for No Due
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyNoDue;
