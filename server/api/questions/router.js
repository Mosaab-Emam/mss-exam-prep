const express = require("express");
const router = express.Router();
const Question = require("./model");

router.get("", (req, res) => {
  Question.find({}).then(data => {
    res.send(data);
  });
});

router.post("", (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.send({
      message: "Request body cannot be empty"
    });
  }
  let question = new Question({
    text: req.body.text,
    choices: req.body.choices,
    descipline: req.body.descipline
  });
  question.save().then(q => {
    res.send(q);
  });
});

module.exports = router;
