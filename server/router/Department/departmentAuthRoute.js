const express = require("express");
const router = express.Router();
const {
  departmentRegisterRoute,
  departmentLoginRoute,
} = require("../../controller/Department/departmentAuthController");

const { logout, about } = require("../../controller/AuthRoute");

router.route("/login/department").post(departmentLoginRoute);
router.route("/register/department").post(departmentRegisterRoute);
router.route("/logout").get(logout);
router.route("/about").get(about);

module.exports = router;

// {
//     "email": "sajan.ranveer@gmail.com",
//     "password":"hiIamthepassword"
// }
