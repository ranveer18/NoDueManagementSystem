const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,

    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

departmentSchema.pre("save", async function (next) {
  console.log("hi from pre inside");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

departmentSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const departmentRegister = new mongoose.model(
  "departmentRegister",
  departmentSchema
);
// module.exports = { departmentRegister };
module.exports = departmentRegister;

// {
//     "name":"Vasooli",
//     "email":"VasooliBhai@gmail.com",
//     "employeeId":"19105124028",
//     "phone":"7564042812",
//     "department":"cse",
//     "password":"AayeChalHaftaNikal",
//     "cpassword":"AayeChalHaftaNikal"
// }
