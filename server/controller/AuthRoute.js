require("../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const departmentRegister = require("../models/departmentModels");

const logout = async (req, res) => {
  try {
    // console.log(req.user);
    // req.user.tokens = req.user.tokens.filter((currElement) => {
    //   return currElement.token !== req.token;
    // });
    await res.clearCookie("jwtoken", { path: "/" });
    // await req.user.save();
    res.status(200).send("Logout Successfully");
  } catch (error) {
    console.log(error);
  }
};

const about = async (req, res) => {
  try {
    await res.send(req.rootUser);
  } catch (error) {
    consolelog(error);
  }
};

module.exports = { logout, about };
