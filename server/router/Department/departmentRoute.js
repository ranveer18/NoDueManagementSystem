const express = require("express");

const router = express.Router();
const {
  getAllDepartments,
  getSingleDepartment,
  deleteDepartment,
  updateDepartment,
} = require("../../controller/Department/departmentController");

router.route("/department").get(getAllDepartments);
router
  .route("/department/:id")
  .get(getSingleDepartment)
  .patch(updateDepartment)
  .delete(deleteDepartment);

module.exports = router;
