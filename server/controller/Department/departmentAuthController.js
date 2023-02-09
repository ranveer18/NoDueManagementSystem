require("../../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const departmentRegister = require("../../models/departmentModels");

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
    const AdminstrationRegisterData = new departmentRegister({
      name,
      email,
      phone,
      employeeId,
      department,
      password,
      cpassword,
      verificationToken,
    });

    await AdminstrationRegisterData.save();
    res.status(201).json({ message: req.body });
  }
};
// login route

const departmentLoginRoute = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Enter valid data" });
  }
  const userLogin = await departmentRegister.findOne({ email: email });
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
  departmentLoginRoute,
  departmentRegisterRoute,
};

// {
//     "email":"VasooliBhai@gmail.com",
//     "password":"AayeChalHaftaNikal",
// }
