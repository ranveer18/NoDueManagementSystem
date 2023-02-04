require('../db/conn')
const studentRegister = require("../models/studentModels");

const getAllStudents =async(req,res)=>{
    const getAllStudentsData= await studentRegister.find();
    res.status(200).json(getAllStudentsData);
}

const getSingleStudent=async(req,res)=>{
    const  registration= req.params.id;
    const getSingleStudentData= await studentRegister.find({registration});
    if(!getSingleStudentData){
        res.status(404).send()
    }
    else{
        res.status(200).send(getSingleStudentData);
    }
}

const updateStudent=async(req,res)=>{
    const _id= req.param.id;


    const updateStudentData= await studentRegister.findByIdAndUpdate(
        _id,
        req.body,
        {
          new: true,
        }
      );
      res.status(201).send(updateStudentData);;
}

const  deleteStudent = async(req,res)=>{
    const _id=req.param.id;
    const deleteStudentData= await studentRegister.findByIdAndDelete(_id);
    if(!deleteStudentData){
        res.status(404).send();
    }
    else{
        res.status(200).send(deleteStudentData);
    }
}

module.exports={getSingleStudent,getAllStudents,deleteStudent,updateStudent};