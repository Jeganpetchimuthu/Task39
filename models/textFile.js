const mongoose = require("mongoose");

const textFileSchema = mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  registered_on: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    default: Date.now,
  },
  phone_no: {
    type: Number,
    required: true,
  },

  Address: {
    type: String,
    required: true,
  },
});

const textFile = mongoose.model("textFile", textFileSchema);

module.exports = textFile;
