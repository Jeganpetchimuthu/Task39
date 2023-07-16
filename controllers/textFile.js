const express = require("express");
const mongoose = require("mongoose");

const textFile = require("../models/textFile");

const router = express.Router();

const createTextFile = async (req, res) => {
  console.log(req.body);
  const newTextFile = new textFile({
    filename: req.body.filename,
    username: req.body.username,
    registered_on: req.body.registered_on,
    size: req.body.size,
    timestamp: req.body.timestamp,
    phone_no: req.body.phone_no,
    Address: req.body.Address,
  });

  try {
    await newTextFile.save();

    res.status(201).json(newTextFile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.createTextFile = createTextFile;
