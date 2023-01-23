const express = require("express");
const router = express.Router();

const {
  loginRoute,
  AdminstrationRegisterRoute,
  studentRegisterRoute,
} = require("../controller/authcontroller");

router.route("/login").post(loginRoute);
router.route("/register/Adminstration").post(AdminstrationRegisterRoute);
router.route("/register/Student").post(studentRegisterRoute);

module.exports = router;
