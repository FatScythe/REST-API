const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const apiRouter = require("./routes/api");
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());
app.use("/api", apiRouter);

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const connect = await mongoose.connect(process.env.DB_CONNECTION);
    console.log("connected to the DB");
    app.listen(5000, () => console.log("server is listening on port 5000"));
  } catch (err) {
    console.error(err);
  }
};

connectDB();
