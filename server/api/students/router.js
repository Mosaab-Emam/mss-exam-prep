const express = require("express");
const router = express.Router();
const Student = require("./model");

router.post("/:name", async (req, res) => {
  const { name } = req.params;
  const student = new Student({ name });
  await student.save();
  res.status(201).send();
});

module.exports = router;
