const express = require("express");
const router = express.Router();
const questionsRouter = require("./questions/router");

router.use("/questions", questionsRouter);

module.exports = router;
