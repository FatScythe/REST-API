const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const apiRouter = require("./routes/api");
const cors = require("cors");

app.use(express.static("./public"));
app.use(express.json());
app.use(cors());
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const connect = await mongoose.connect(process.env.DB_CONNECTION);
    console.log("connected to the DB");
  } catch (err) {
    console.error(err);
  }
};

connectDB();

app.use("/api", apiRouter);

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
