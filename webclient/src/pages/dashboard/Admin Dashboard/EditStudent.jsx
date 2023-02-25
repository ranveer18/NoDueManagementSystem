import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import StudentDashboard from "../Student dashboard/StudentDashboard";
const EditStudent = () => {
  const navigation = useNavigate();
  useEffect(() => {
    verifyUser();
  }, []);

  const verifyUser = async () => {
    try {
      const res = await fetch("/api/v1/admin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      if (res.status === 401) {
        const error = new Error(res.error);
        console.log(error);
      }
    } catch (error) {
      navigation("/login");
      console.log(error);
    }
  };
  return (
    <>
      <StudentDashboard />
    </>
  );
};

export default EditStudent;
