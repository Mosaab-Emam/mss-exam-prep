const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  choices: {
    type: Array,
    required: true
  },
  descipline: {
    type: String,
    required: true
  },
  lesson: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Question", QuestionSchema);
