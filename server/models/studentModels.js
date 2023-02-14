const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  registration: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  branch: {
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
studentSchema.pre("save", async function (next) {
  console.log("hi from pre inside");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

studentSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

studentSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.password;
    delete ret.cpassword;
    return ret;
  },
});
const studentRegister = new mongoose.model("studentRegister", studentSchema);

module.exports = studentRegister;

// {
//     "name":"ranveer",
//     "email":"sajan.ranveer@gmail.com",
//     "batch":"2019",
//     "registration":"19105124028",
//     "phone":"7564042812",
//     "branch":"cse",
//     "password":"hiIamthepassword",
//     "cpassword":"hiIamthepassword"
// }
