require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/conn");
var bodyParser = require("body-parser");
const Authenticate = require("./middleware/authenticate");
var cookieParser = require("cookie-parser");

const { admin, logout } = require("./controller/AuthRoute");

const studentRouter = require("./router/Student/studentRoute");
const studentAuthRouter = require("./router/Student/studentAuthRoute");
const departmentAuthRouter = require("./router/Department/departmentAuthRoute");
const departmentRouter = require("./router/Department/departmentRoute");

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", studentRouter, departmentRouter);
app.use("/api/v1", studentAuthRouter, departmentAuthRouter);
app.get("/api/v1/admin", Authenticate, admin);
app.get("/api/v1y/logout", Authenticate, logout);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
