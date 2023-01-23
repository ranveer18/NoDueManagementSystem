const express = require("express");
const router = express.Router();

const {
  getAllStudent,
  getStudent,
  deleteStudent,
  updateStudent,
} = require("../controller/studentController");

router.route("/student").get(getAllStudent);
router
  .route("/student/:id")
  .get(getStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

module.exports = router;
