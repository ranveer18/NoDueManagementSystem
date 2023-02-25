const express = require("express");
const router = express.Router();
const {
  departmentRegisterRoute,
  departmentLoginRoute,
  verifyEmail,
} = require("../../controller/Department/departmentAuthController");

const { logout } = require("../../controller/AuthRoute");

router.route("/login/department").post(departmentLoginRoute);
router.route("/register/department").post(departmentRegisterRoute);
router.route("/logout").get(logout);
router.route("/admin/verify-email").post(verifyEmail);

// router.route("/about").get(admin);

module.exports = router;

// {
//     "email": "sajan.ranveer@gmail.com",
//     "password":"hiIamthepassword"
// }
