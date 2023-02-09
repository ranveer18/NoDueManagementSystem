const express = require("express");

const router = express.Router();
const {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
} = require("../../controller/Student/studentController");

router.route("/student").get(getAllStudents);
router
  .route("/student/:id")
  .get(getSingleStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

module.exports = router;
