const express = require("express");
const textFileAction = require("../controllers/textFile");
const router = express.Router();

router.post("/", textFileAction.createTextFile);

module.exports = router;
