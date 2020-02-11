const express = require("express");
const router = express.Router();
const questionsRouter = require("./questions/router");
const studentsRouter = require("./students/router");

router.use("/questions", questionsRouter);
router.use("/students", studentsRouter);

module.exports = router;
