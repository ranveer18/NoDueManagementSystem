require("../../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const departmentRegister = require("../../models/departmentModels");
const sendVerificationEmail = require("../../utils/sendverificationEmail");
//register student data route

const departmentRegisterRoute = async (req, res) => {
  const { name, email, phone, employeeId, department, password, cpassword } =
    req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !employeeId ||
    !department ||
    !password ||
    !cpassword
  ) {
    return res.status(400).json({ error: "Enter valid data" });
  }

  const userExit = await departmentRegister.findOne({
    email: email,
  });
  if (userExit) {
    return res.status(422).json({ error: "Email already exit" });
  } else if (password != cpassword) {
    return res.status(422).json({ error: "password are not matching" });
  } else {
    const verificationToken = crypto.randomBytes(40).toString("hex");
    const AdminstrationRegisterData = await departmentRegister.create({
      name,
      email,
      phone,
      employeeId,
      department,
      password,
      cpassword,
      verificationToken,
    });
    const origin = "http://localhost:5050";
    await sendVerificationEmail({
      name: AdminstrationRegisterData.name,
      email: AdminstrationRegisterData.email,
      verificationToken: AdminstrationRegisterData.verificationToken,
      origin,
    });

    // await AdminstrationRegisterData.save();
    // res.status(201).json({ message: req.body });
    res.status(201).json({
      msg: "Success! Please check your email to verify account",
    });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { verificationToken, email } = req.body;
    const AdminstrationRegisterData = await departmentRegister.findOne({
      email,
    });
    console.log("checkin");
    if (!AdminstrationRegisterData) {
      // throw error("no data Verification Failed");
      res.status(404).json({
        msg: "Verification Failed",
      });
    }
    if (AdminstrationRegisterData.verificationToken !== verificationToken) {
      res.status(404).json({
        msg: "Verification Failed",
      });
    }
    console.log("checking");
    (AdminstrationRegisterData.isVerified = true),
      (AdminstrationRegisterData.verified = Date.now());
    AdminstrationRegisterData.verificationToken = "";

    await AdminstrationRegisterData.save();

    res.status(201).json({ msg: "Email Verified" });
  } catch (error) {
    console.log(error);
  }
};
// login route

const departmentLoginRoute = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Enter valid data" });
  }
  const userLogin = await departmentRegister.findOne({ email: email });
  if (userLogin) {
    const isMatch = await bcrypt.compare(password, userLogin.password);
    const token = await userLogin.generateAuthToken();
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 500000),
      httpOnly: true,
      // 9min valid
    });

    if (!isMatch) {
      res.status(400).json({ error: "Invalid creditial" });
    } else {
      res.status(201).json({ message: "Login successfully" });
    }
  }
};

module.exports = {
  departmentLoginRoute,
  departmentRegisterRoute,
  verifyEmail,
};

// {
//     "email":"VasooliBhai@gmail.com",
//     "password":"AayeChalHaftaNikal",
// }
