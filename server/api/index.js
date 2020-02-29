const express = require("express");
const router = express.Router();
const questionsRouter = require("./questions/router");
const studentsRouter = require("./students/router");
const IPRouter = require("./ip/router");

router.use("/questions", questionsRouter);
router.use("/students", studentsRouter);
router.use("/ip", IPRouter);

module.exports = router;
