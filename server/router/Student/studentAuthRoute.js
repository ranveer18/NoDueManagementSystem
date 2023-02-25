const express = require("express");
const router = express.Router();
const {
  loginRoute,
  studentRegisterRoute,
  verifyEmail,
} = require("../../controller/Student/studentAuthController");

router.route("/login/student").post(loginRoute);
router.route("/register/Student").post(studentRegisterRoute);
router.route("/verify-email").post(verifyEmail);

module.exports = router;

// {
//     "email": "sajan.ranveer@gmail.com",
//     "password":"hiIamthepassword"
// }
