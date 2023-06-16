import React from "react";
import StudentDashboardSidebar from "./StudentDashboardSidebar";
import qr from "../../../images/qr.jpeg";
const MakePayment = () => {
  return (
    <>
      <section className="dashboard__section">
        <StudentDashboardSidebar />
        <div className="dashboard__form__container">
          <div className="form__data__container">
            <div className="due_container">
              <h2 style={{ fontSize: "20px" }}>
                Total amount to be paid: Rs. 1198
              </h2>
            </div>
            <div className="due_container" style={{ fontSize: "20px" }}>
              Make Your Payment Here: scesasaram@upi
            </div>
            <div
              className="due_container"
              style={{ fontSize: "20px", margin: "0px" }}
            >
              --or--
            </div>
            <div
              className="due_container"
              style={{ fontSize: "20px", margin: "0px" }}
            >
              Scan this:
            </div>
            <div
              className="due_container"
              style={{ fontSize: "20px", margin: "0px" }}
            >
              <img src={qr} width={"300px"} />
            </div>
            <div
              className="due_container"
              style={{ fontSize: "20px", margin: "0px" }}
            >
              <form>
                <div className="input__container focus">
                  {/* <div className="icon">
                    <FaUser />
                  </div> */}
                  <input
                    required
                    type="text"
                    className="input"
                    name="name"
                    // value={inputs.name || ""}
                    // onChange={handleChange}
                    placeholder="Enter Your Payment Reference No."
                  />
                </div>
                <div className="input__container focus">
                  <input
                    required
                    type="text"
                    className="input"
                    name="name"
                    // value={inputs.name || ""}
                    // onChange={handleChange}
                    placeholder="Enter Your Payment UPI ID"
                  />
                </div>
                <div className="input__container focus">
                  <input
                    required
                    type="text"
                    className="input"
                    name="name"
                    // value={inputs.name || ""}
                    // onChange={handleChange}
                    placeholder="Amount you paid"
                  />
                </div>
                <button type="submit" className="form__button">
                  <div className="button__icon"></div>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakePayment;
