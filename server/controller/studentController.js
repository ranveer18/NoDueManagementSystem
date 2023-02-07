require("../db/conn");
const studentRegister = require("../models/studentModels");

const getAllStudents = async (req, res) => {
  const getAllStudentsData = await studentRegister.find();
  res.status(200).json(getAllStudentsData);
};

const getSingleStudent = async (req, res) => {
  const _id = req.params.id;
  const getSingleStudentData = await studentRegister.find({ _id });
  if (!getSingleStudentData) {
    res.status(404).send();
  } else {
    res.status(200).send(getSingleStudentData);
  }
};

const updateStudent = async (req, res) => {
  try {
    const _id = req.param.id;
    const updateStudentData = await studentRegister.updateOne(_id, req.body, {
      $set: req.body,
    });
    res.status(201).send(updateStudentData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  const _id = req.param.id;
  const deleteStudentData = await studentRegister.findByIdAndDelete(_id);
  if (!deleteStudentData) {
    res.status(404).send();
  } else {
    res.status(200).send(deleteStudentData);
  }
};

module.exports = {
  getSingleStudent,
  getAllStudents,
  deleteStudent,
  updateStudent,
};
