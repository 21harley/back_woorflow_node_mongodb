const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const port = process.env.port || 9000;

//routes
app.get("/", (req, res) => {
  res.send("Hola :V");
});

//mongodb conection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connect to mongoDB Atlas");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log("Hola mundo :v ", port);
});
