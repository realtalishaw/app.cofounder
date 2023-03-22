const mongoose = require('mongoose');

const surveyAnswerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  answers: {
    type: Object,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const SurveyAnswer = mongoose.model('SurveyAnswer', surveyAnswerSchema);
module.exports = SurveyAnswer;
