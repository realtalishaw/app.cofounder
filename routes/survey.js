const express = require('express');
const router = express.Router();
const Survey = require('../models/Survey');

// Route to save answers
router.post('/save-answers', async (req, res) => {
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
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Route to submit survey
router.post('/submit-survey', async (req, res) => {
  const { userId, answers } = req.body;

  try {
    const survey = await Survey.findOneAndUpdate(
      { userId },
      { $set: { answers } },
      { new: true }
    );

    if (survey) {
      res.json({ success: true });
    } else {
      const newSurvey = new Survey({
        userId,
        answers,
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
router.post('/edit-answers', async (req, res) => {
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

module.exports = router;
