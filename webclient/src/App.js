import "./App.css";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Logout from "./components/Logout";
import AdminLogin from "./pages/login/AdminLogin";
import StudentRegister from "./pages/register/StudentRegister";
// import StudentDashboard from "./pages/dashboard/Admin Dashboard/StudentDashboard";
import AdminDashboard from "./pages/dashboard/Admin Dashboard/AdminDashboard";
import EditStudent from "./pages/dashboard/Admin Dashboard/EditStudent";
import VerifyEmail from "./components/VerifyEmail";
import StudentLogin from "./pages/login/StudentLogin";
import StudentProfile from "./pages/dashboard/Student dashboard/StudentProfile";
import ViewDue from "./pages/dashboard/Student dashboard/ViewDue";
import ApplyNoDue from "./pages/dashboard/Student dashboard/ApplyNoDue";
import MakePayment from "./pages/dashboard/Student dashboard/MakePayment";
import NoDueApplied from "./components/NoDueApplied";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />}></Route>
          <Route path="/studentLogin" element={<StudentLogin />}></Route>
          <Route path="/register" element={<StudentRegister />}></Route>
          <Route path="/user/verify-email" element={<VerifyEmail />}></Route>
          <Route path="/no-due-applied" element={<NoDueApplied />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/student" element={<StudentProfile />}></Route>
          <Route path="/student/due" element={<ViewDue />}></Route>
          <Route path="/student/applyNoDue" element={<ApplyNoDue />}></Route>
          <Route path="/student/makePayment" element={<MakePayment />}></Route>
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
