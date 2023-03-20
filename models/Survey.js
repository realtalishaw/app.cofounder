const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionId: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const surveySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  answers: [answerSchema],
});

module.exports = mongoose.model('Survey', surveySchema);
