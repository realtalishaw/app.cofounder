import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';
import { saveAnswer } from '../../services/answerService';

export const questions = [
    {
      id: 'personal_connection',
      type: 'opinion_scale',
      text: 'It is important for you to have a personal connection with your co-founder(s)?',
      min: 1,
      max: 5,
    },
    {
      id: 'shared_values',
      type: 'opinion_scale',
      text: 'It is important for me to share common values and vision with my co-founder(s).',
      min: 1,
      max: 5,
    },
    {
      id: 'complementary_skills',
      type: 'opinion_scale',
      text: 'It is important for me to have complementary skills and expertise with my co-founder(s).',
      min: 1,
      max: 5,
    },
    {
      id: 'challenge_ideas',
      type: 'opinion_scale',
      text: 'I prefer to work with co-founder(s) who challenge my ideas and assumptions.',
      min: 1,
      max: 5,
    },
    {
      id: 'clear_roles',
      type: 'opinion_scale',
      text: 'It is important for me to have clear roles and responsibilities with my co-founder(s).',
      min: 1,
      max: 5,
    },
    {
      id: 'trust_transparency',
      type: 'opinion_scale',
      text: 'Trust and transparency in my relationship with my co-founder(s) is important to me.',
      min: 1,
      max: 5,
    },
  ];

  
const InterpersonalDynamics = ({ currentQuestion, savedAnswers }) => {
  const question = questions[currentQuestion];

  return (
    <div className="interpersonal-dynamics w-3/4 p-6">
      <h2 className="text-2xl font-bold text-center">{question.text}</h2>
      <QuestionRenderer

question={question}

savedAnswers={savedAnswers}

onSaveAnswer={saveAnswer}

/>
    </div>
  );
};

export default InterpersonalDynamics;
