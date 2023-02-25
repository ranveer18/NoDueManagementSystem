import "./App.css";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StudentLogin from "./StudentLogin";
import Logout from "./components/Logout";
import StudentRegister from "./StudentRegister";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./components/Admin Dashboard/AdminDashboard";
import EditStudent from "./components/Admin Dashboard/EditStudent";
import VerifyEmail from "./VerifyEmail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentRegister />}></Route>
          <Route path="/login" element={<StudentLogin />}></Route>
          <Route path="/user/verify-email" element={<VerifyEmail />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/dashboard" element={<StudentDashboard />}></Route>
          <Route path="/admin" element={<AdminDashboard />}></Route>
          <Route
            path="/admin/studentedit/:id"
            element={<EditStudent />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
