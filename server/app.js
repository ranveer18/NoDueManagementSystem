const express = require("express");
const app = express();

var bodyParser = require("body-parser");

// database
const connectDB = require("./db/connect");

//  routers
const authRouter = require("./route/authRoute");
const studentRouter = require("./route/studentRoute");

// middleware

app.use("/api/v1/", authRouter);
app.use("/api/v1/", studentRouter);

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
