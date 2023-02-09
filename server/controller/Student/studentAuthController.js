require("../../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const studentRegister = require("../../models/studentModels");
//register student data route

const studentRegisterRoute = async (req, res) => {
  const {
    name,
    batch,
    email,
    registration,
    phone,
    branch,
    password,
    cpassword,
  } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(400).json({ error: "Enter valid data" });
  }

  const userExit = await studentRegister.findOne({
    email: email,
  });
  if (userExit) {
    return res.status(422).json({ error: "Email already exit" });
  } else if (password != cpassword) {
    return res.status(422).json({ error: "password are not matching" });
  } else {
    const verificationToken = crypto.randomBytes(40).toString("hex");
    const AdminstrationRegisterData = new studentRegister({
      name,
      batch,
      email,
      registration,
      phone,
      branch,
      password,
      cpassword,
      verificationToken,
    });

    await AdminstrationRegisterData.save();
    res.status(201).json({ message: req.body });
  }
};
// login route

const loginRoute = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Enter valid data" });
  }
  const userLogin = await studentRegister.findOne({ email: email });
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
};

module.exports = {
  loginRoute,
  studentRegisterRoute,
  // verifyEmail,
};
