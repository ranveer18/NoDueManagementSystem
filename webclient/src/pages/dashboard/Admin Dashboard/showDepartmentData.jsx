import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

import axios from "axios";
const ShowDepartmentData = () => {
  const [users, setUser] = useState([]);
  const [foundUsers, setFoundUsers] = useState(users);

  useEffect(() => {
    getUsers();
  }, []);

  const [name, setName] = useState("");

  const getUsers = async () => {
    try {
      const response = await axios.get("/api/v1/department");
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
        return user.employeeId.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(users);
    }

    setName(keyword);
  };

  const deleteUser = async (id) => {
    try {
      window.alert("delete user");
      await axios.delete(`/api/v1/department/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
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
        <table>
          <thead>
            <tr>
              <th className="serial_no">S.No</th>
              <th>Name</th>
              <th>Reg No</th>
              <th>Email</th>
              <th>Mobile</th>
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
                  <td>{user.employeeId}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <NavLink to={`studentedit/${user._id}`}>
                      <button
                        className="view__button"
                        style={{ backgroundColor: "#5ac0f6" }}
                      >
                        Edit
                        <div className="crud__icons">
                          <FiEdit />
                        </div>
                      </button>
                    </NavLink>
                    {/* <NavLink to={`studentedit/${user._id}`}> */}
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="view__button"
                      style={{
                        backgroundColor: "#f2611e",
                        width: "auto",
                        padding: "10px 1rem",
                      }}
                    >
                      Delete
                      <div className="crud__icons">
                        <AiOutlineDelete />
                      </div>
                    </button>
                    {/* </NavLink> */}
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

export default ShowDepartmentData;
