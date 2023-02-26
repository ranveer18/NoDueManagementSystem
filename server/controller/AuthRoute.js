require("../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const departmentRegister = require("../models/departmentModels");

const logout = async (req, res) => {
  try {
    await res.clearCookie("jwtoken", { path: "/" });
    // await req.user.save();
    res.status(200).send("Logout Successfully");
  } catch (error) {
    console.log(error);
  }
};

const admin = async (req, res) => {
  try {
    await res.send(req.rootUser);
  } catch (error) {
    console.log(error);
  }
};
const student = async (req, res) => {
  try {
    await res.send(req.rootUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { logout, admin, student };
