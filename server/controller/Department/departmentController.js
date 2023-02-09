require("../../db/conn");
const departmentRegister = require("../../models/departmentModels");
const studentRegister = require("../../models/studentModels");

const getAllDepartments = async (req, res) => {
  const getAllDepartmentsData = await departmentRegister.find();
  res.status(200).json(getAllDepartmentsData);
};

const getSingleDepartment = async (req, res) => {
  const _id = req.params.id;
  const getSingleDepartmentData = await departmentRegister.find({ _id });
  if (!getSingleDepartmentData) {
    res.status(404).send();
  } else {
    res.status(200).send(getSingleDepartmentData);
  }
};

const updateDepartment = async (req, res) => {
  try {
    const _id = req.param.id;
    const updateDepartmentData = await departmentRegister.updateOne(
      _id,
      req.body,
      {
        $set: req.body,
      }
    );
    res.status(201).send(updateDepartmentData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteDepartment = async (req, res) => {
  const _id = req.param.id;
  const deleteDepartmenttData = await departmentRegister.findByIdAndDelete(_id);
  if (!deleteDepartmenttData) {
    res.status(404).send();
  } else {
    res.status(200).send(deleteDepartmenttData);
  }
};

module.exports = {
  getAllDepartments,
  getSingleDepartment,
  deleteDepartment,
  updateDepartment,
};
