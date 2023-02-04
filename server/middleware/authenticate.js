const jwt = require("jsonwebtoken");
require("dotenv").config();
const studentRegister = require("../models/studentModels");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookie.jwtoken;
    console.log(token);
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await studentRegister.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User Not Found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized:no token provided");
    console.log(err);
  }
};

module.exports = Authenticate;
