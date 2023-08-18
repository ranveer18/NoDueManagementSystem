require("../../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const studentRegister = require("../../models/studentModels");
const sendVerificationEmail = require("../../utils/sendverificationEmail");

//register student data route

const studentRegisterRoute = async (req, res) => {
  try {
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
    if (!name || !email || !registration || !password || !cpassword) {
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
      const StudentRegisterData = await studentRegister.create({
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
      const origin = "http://localhost:3000";
      await sendVerificationEmail({
        name: StudentRegisterData.name,
        email: StudentRegisterData.email,
        verificationToken: StudentRegisterData.verificationToken,
        origin,
      });
      // await AdminstrationRegisterData.save();
      // res.status(201).json({ message: req.body });
      res.status(201).json({
        msg: "Success! Please check your email to verify account",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// send email
const verifyEmail = async (req, res) => {
  try {
    const { verificationToken, email } = req.body;
    const StudentRegisterData = await studentRegister.findOne({
      email,
    });
    if (!StudentRegisterData) {
      // throw error("no data Verification Failed");
      res.status(404).json({
        msg: "Verification Failed",
      });
    }
    if (StudentRegisterData.verificationToken !== verificationToken) {
      res.status(404).json({
        msg: "Verification Failed",
      });
    }
    (StudentRegisterData.isVerified = true),
      (StudentRegisterData.verified = Date.now());
    StudentRegisterData.verificationToken = "";

    await StudentRegisterData.save();

    res.status(201).json({ msg: "Email Verified" });
  } catch (error) {
    console.log(error);
  }
};
// login route

const loginRoute = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Enter valid data" });
    }

    const userLogin = await studentRegister.findOne({ email: email });
    console.log(userLogin);
    
    if (userLogin) {
      if (!userLogin.isVerified) {
        return res.status(401).json({ error: "Please verify your email" });
      }
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 1800000),
        httpOnly: true,
        // 30min valid
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid creditial" });
      } else {
        res.status(201).json({ message: "Login successfully" });
      }
    }else{
      res.status(400).json({ error: "Invalid creditial" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginRoute,
  studentRegisterRoute,
  verifyEmail,
};
