import DashboardSidebar from "./DashboardSidebar";

import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

import axios from "axios";
const NoDueClearance = () => {
  const [users, setUser] = useState([]);
  const [foundUsers, setFoundUsers] = useState(users);

  useEffect(() => {
    getUsers();
  }, []);

  const [name, setName] = useState("");

  const getUsers = async () => {
    try {
      const response = await axios.get("/api/v1/student");
      setUser(response.data);
      setFoundUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = users.filter((user) => {
        return user.registration
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(users);
    }

    setName(keyword);
  };
  const handleIssueNoDue = () => {
    alert("No due Certificate Issued to the Student!");
  };
  const handleRejectNoDue = () => {
    alert("No due Certificate Rejected!");
  };
  return (
    <>
      <div className="admin__search__container">
        <div className="admin__search__search">
          <div className="filter_icon">
            <FaFilter />
          </div>
          <input
            // type="text"
            type="search"
            className="filter__registration input"
            value={name}
            onChange={filter}
            //         className="input"
            //         placeholder="Filter"
            placeholder="Search by Registration "
          />
          <div className="search__button">Search</div>
        </div>
        {/* <DasboardForm /> */}
      </div>
      <div className="show__data" style={{ padding: "2rem" }}>
        <h1 style={{ textAlign: "center", fontSize: "25px", margin: "2rem" }}>
          No Due Applications
        </h1>
        <table>
          <thead>
            <tr>
              <th className="serial_no">S.No</th>
              <th>Name</th>
              <th>Reg No</th>
              <th>Payment Ref. No.</th>
              <th>Amount Paid</th>
              <th></th>
            </tr>
          </thead>

          {foundUsers && foundUsers.length > 0 ? (
            foundUsers.map((user, index) => (
              // {users.map((user, index) => {
              // return (
              <tbody key={index}>
                <tr>
                  <td className="serial_no">{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.registration}</td>
                  <td>{parseInt(Math.random() * 1000000000000000)}</td>
                  <td>{parseInt(Math.random() * 10000)}</td>
                  <td>
                    <button
                      className="view__button"
                      style={{ backgroundColor: "#5ac0f6" }}
                      onClick={handleIssueNoDue}
                    >
                      Issue NoDue
                      <div className="crud__icons">
                        <FiEdit />
                      </div>
                    </button>
                    <button
                      onClick={handleRejectNoDue}
                      className="view__button"
                      style={{
                        backgroundColor: "#f2611e",
                        width: "auto",
                        padding: "10px 1rem",
                      }}
                    >
                      Reject
                      <div className="crud__icons">
                        <AiOutlineDelete />
                      </div>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td>No results found!</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

function NoDueApplied() {
  return (
    <>
      <section className="dashboard__section">
        <DashboardSidebar />
        <div className="dashboard__form__container" style={{ padding: "2rem" }}>
          {/* <FilterSection /> */}
          <NoDueClearance />
        </div>
      </section>
    </>
  );
}

export default NoDueApplied;
