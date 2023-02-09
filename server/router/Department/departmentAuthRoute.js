const express = require("express");
const router = express.Router();
const {
  departmentRegisterRoute,
  departmentLoginRoute,
} = require("../../controller/Department/departmentAuthController");

router.route("/login/department").post(departmentLoginRoute);
router.route("/register/department").post(departmentRegisterRoute);

module.exports = router;

// {
//     "email": "sajan.ranveer@gmail.com",
//     "password":"hiIamthepassword"
// }
