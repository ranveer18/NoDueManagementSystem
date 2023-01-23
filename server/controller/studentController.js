require("../db/connect");
const asyncWrapper = require("../middleware/async");
const { studentRegister, AdminstrationRegister } = require("../models/models");

//API Routers

const getAllStudent = asyncWrapper(async (req, res) => {
  const studentRegisterData = await studentRegister.find();
  res.status(200).json(studentRegisterData);
});

const getStudent = asyncWrapper(async (req, res) => {
  const _id = req.params.id;
  const studentRegisterData = await studentRegister.findById({ _id });

  if (!studentRegisterData) {
    return res.status(404).send();
  } else {
    res.send(studentRegisterData);
  }
});

const updateStudent = asyncWrapper(async (req, res) => {
  const _id = req.params.id;
  const updatestudentRegisters = await studentRegister.findByIdAndUpdate(
    _id,
    req.body,
    {
      new: true,
    }
  );
  res.status(201).send(updatestudentRegisters);
});

const deleteStudent = asyncWrapper(async (req, res) => {
  const _id = req.params.id;
  const deletestudentRegisters = await studentRegister.findByIdAndDelete(_id);
  if (!_id) {
    return res.status(404).send();
  }
  res.status(200).send(deletestudentRegisters);
});

module.exports = {
  getAllStudent,
  getStudent,
  deleteStudent,
  updateStudent,
};
