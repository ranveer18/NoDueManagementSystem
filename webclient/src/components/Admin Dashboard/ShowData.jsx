import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import axios from "axios";
const ShowData = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("/api/v1/student");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="show__data">
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

          {users.map((user, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td className="serial_no">{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.registration}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <NavLink to={`studentedit/${user._id}`}>
                      <button
                        className="view__button"
                        style={{ backgroundColor: "green" }}
                      >
                        Edit
                        <div className="crud__icons">
                          <FiEdit />
                        </div>
                      </button>
                    </NavLink>
                    <NavLink to={`studentedit/${user._id}`}>
                      <button
                        className="view__button"
                        style={{ backgroundColor: "red" }}
                      >
                        Delete
                        <div className="crud__icons">
                          <AiOutlineDelete />
                        </div>
                      </button>
                    </NavLink>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default ShowData;
