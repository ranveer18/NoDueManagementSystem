const express = require("express");
const router = express.Router();
const {
  loginRoute,
  studentRegisterRoute,
} = require("../../controller/Student/studentAuthController");

router.route("/login/student").post(loginRoute);
router.route("/register/Student").post(studentRegisterRoute);

module.exports = router;

// {
//     "email": "sajan.ranveer@gmail.com",
//     "password":"hiIamthepassword"
// }
