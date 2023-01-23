require("../db/connect");
const asyncWrapper = require("../middleware/async");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/authenticate");
const crypto = require("crypto");
const { studentRegister, AdminstrationRegister } = require("../models/models");
const { sendVerificationEmail } = require("../utils/sendVerficationEmail");
//register student data route

const studentRegisterRoute = asyncWrapper(async (req, res) => {
  const { name, batch, email, registration, phone, branch } = req.body;
  if (!name || !batch || !email || !registration || !phone || !branch) {
    return res.status(400).json({ error: "Enter valid data" });
  }

  const userExit = await studentRegister.findOne({
    email: email,
  });
  if (userExit) {
    return res.status(422).json({ error: "Email already exit" });
  }
  const studentRegisterData = new studentRegister({
    name,
    batch,
    email,
    registration,
    phone,
    branch,
  });

  await studentRegisterData.save();
  res.status(201).json({ message: req.body });
});

// Adminstraion register route

const AdminstrationRegisterRoute = asyncWrapper(async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(400).json({ error: "Enter valid data" });
  }

  const userExit = await AdminstrationRegister.findOne({
    email: email,
  });
  if (userExit) {
    return res.status(422).json({ error: "Email already exit" });
  } else if (password != cpassword) {
    return res.status(422).json({ error: "password are not matching" });
  } else {
    const verificationToken = crypto.randomBytes(40).toString("hex");
    const AdminstrationRegisterData = new AdminstrationRegister({
      name,
      email,
      phone,
      password,
      cpassword,
      verificationToken,
    });

    await AdminstrationRegisterData.save();
    res.status(201).json({ message: req.body });
  }
});

// login route

const loginRoute = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Enter valid data" });
  }
  const userLogin = await AdminstrationRegister.findOne({ email: email });
  // console.log(userLogin);
  if (userLogin) {
    const isMatch = await bcrypt.compare(password, userLogin.password);
    const token = await userLogin.generateAuthToken();
    console.log(token);
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
});

module.exports = {
  loginRoute,
  AdminstrationRegisterRoute,
  studentRegisterRoute,
  // verifyEmail,
};
