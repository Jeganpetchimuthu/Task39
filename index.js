const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const dbUrl = "mongodb://0.0.0.0:27017";

mongoose.connect(dbUrl, { useNewUrlParser: true });

const con = mongoose.connection;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
  con.on("open", () => {
    console.log("mongoDB connected!!!");
  });
} catch (error) {
  console.log("Error: " + error);
}

const port = 3000;

const textFileRouter = require("./routers/textFile");

app.use("/textfile", textFileRouter);

app.listen(port, () => {
  console.log("The node application is Runing on " + port);
});
