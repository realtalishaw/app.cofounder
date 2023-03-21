import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';
import { saveAnswer } from '../../services/answerService';

export const questions = [
  {
    id: 'skills_1',
    type: 'opinion_scale',
    text: "On a scale of 1-10, how would you rate your design and user experience skills?",
    scale: { min: 1, max: 10, labels: null },
  },
  {
    id: 'skills_2',
    type: 'opinion_scale',
    text: "On a scale of 1-10, how would you rate your programming and development skills?",
    scale: { min: 1, max: 10, labels: null },
  },
  {
    id: 'skills_3',
    type: 'opinion_scale',
    text: "On a scale of 1-10, how would you rate your sales and marketing skills?",
    scale: { min: 1, max: 10, labels: null },
  },
  {
    id: 'skills_4',
    type: 'opinion_scale',
    text: "On a scale of 1-10, how would you rate your project management skills?",
    scale: { min: 1, max: 10, labels: null },
  },
  {
    id: 'skills_5',
    type: 'opinion_scale',
    text: "On a scale of 1-10, how would you rate your product management skills?",
    scale: { min: 1, max: 10, labels: null },
  },
  {
    id: 'skills_6',
    type: 'opinion_scale',
    text: "On a scale of 1-10, how would you rate your finance and accounting skills?",
    scale: { min: 1, max: 10, labels: null },
  },
  {
    id: 'skills_7',
    type: 'opinion_scale',
    text: "On a scale of 1-10, how would you rate your operations and logistics skills?",
    scale: { min: 1, max: 10, labels: null },
  },
  {
    id: 'skills_8',
    type: 'opinion_scale',
    text: "On a scale of 1-10, how would you rate your networking and partnership-building skills?",
    scale: { min: 1, max: 10, labels: null },
  },
  {
    id: 'skills_9',
    type: 'opinion_scale',
    text: "On a scale of 1-10, how would you rate your legal and regulatory knowledge?",
    scale: { min: 1, max: 10, labels: null },
  },
  {
    id: 'skills_10',
    type: 'textarea',
    text: "Are there any specific certifications, degrees, or awards that you possess related to your skills?",
  },
];

const Skills = ({ currentQuestion , savedAnswers}) => {
  const question = questions[currentQuestion];

  return (
    <div className="skills w-3/4 p-6">
      <h2 className="text-2xl font-bold text-center">{question.text}</h2>
      <QuestionRenderer

question={question}

savedAnswers={savedAnswers}

onSaveAnswer={saveAnswer}

/>
    </div>
  );
};

export default Skills;
