const express = require('express');
const router = express.Router();
const Survey = require('../models/Survey');
const authenticateJWT = require('../middleware/auth');

// Route to save answers
router.post('/save-answers', authenticateJWT, async (req, res) => {
  const { userId, questionId, answer } = req.body;

  try {
    const survey = await Survey.findOneAndUpdate(
      { userId, 'answers.questionId': questionId },
      { $set: { 'answers.$.answer': answer } },
      { new: true }
    );

    if (survey) {
      res.json({ success: true });
    } else {
      const newSurvey = new Survey({
        userId,
        answers: [{ questionId, answer }],
      });
      await newSurvey.save();
      res.json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

// Route to submit survey
router.post('/submit-survey', authenticateJWT, async (req, res) => {
  const { userId, answers } = req.body;

  try {
    const survey = await Survey.findOneAndUpdate(
      { userId },
      { $set: { answers, submitted: true } },
      { new: true }
    );

    if (survey) {
      res.json({ success: true });
    } else {
      const newSurvey = new Survey({
        userId,
        answers,
        submitted: true,
      });
      await newSurvey.save();
      res.json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


// Route to edit answers
router.post('/edit-answers', authenticateJWT, async (req, res) => {
  const { userId, questionId, answer } = req.body;

  try {
    const survey = await Survey.findOneAndUpdate(
      { userId, 'answers.questionId': questionId },
      { $set: { 'answers.$.answer': answer } },
      { new: true }
    );

    if (survey) {
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'Survey not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Route to get saved answers
router.get('/get-answers', authenticateJWT, async (req, res) => {
  const { userId } = req.user;

  try {
    const survey = await Survey.findOne({ userId });

    if (survey) {
      res.json({ answers: survey.answers });
    } else {
      res.status(404).json({ error: 'No saved answers found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
