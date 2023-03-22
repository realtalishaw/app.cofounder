const express = require('express');
const router = express.Router();
const SurveyAnswer = require('../models/SurveyAnswer');
const passport = require('passport');

// Save survey answers
router.post('/submit', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { userId, answers } = req.body;

  try {
    const surveyAnswer = new SurveyAnswer({
      userId,
      answers
    });

    const savedSurveyAnswer = await surveyAnswer.save();
    res.status(200).json({ message: 'Survey answers saved successfully', savedSurveyAnswer });
  } catch (error) {
    res.status(500).json({ message: 'Error saving survey answers', error });
  }
});

module.exports = router;
