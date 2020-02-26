const express = require("express");
const router = express.Router();
const Question = require("./model");

router.get("/:discipline", async (req, res) => {
  const { discipline } = req.params;

  // Get all questions under the passed discipline
  const questionsUnderDiscipline = await Question.find({ discipline });

  // Get unique topics under the passed discipline
  const topicsUnderDiscipline = new Set();
  questionsUnderDiscipline.forEach(q => {
    topicsUnderDiscipline.add(q.broadSection);
  });

  // Get practices under each topic
  const practicesUnderTopic = {};
  questionsUnderDiscipline.forEach(q => {
    if (!practicesUnderTopic[q.broadSection]) {
      practicesUnderTopic[q.broadSection] = [];
    } else {
      if (!practicesUnderTopic[q.broadSection].includes(q.practice)) {
        practicesUnderTopic[q.broadSection].push(q.practice);
      }
    }
  });

  const practices = [];
  [...topicsUnderDiscipline].forEach(t => {
    practicesUnderTopic[t].forEach(p => {
      const questions = questionsUnderDiscipline.filter(q => {
        return q.broadSection == t && q.practice === p;
      });
      practices.push({
        topic: t,
        title: p,
        questions
      });
    });
  });

  // Send data object
  res.send(practices);
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
    discipline: req.body.descipline
  });
  question.save().then(q => {
    res.send(q);
  });
});

module.exports = router;
