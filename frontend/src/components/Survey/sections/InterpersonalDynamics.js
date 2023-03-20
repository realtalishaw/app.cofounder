import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';

export const questions = [
    {
      id: 'personal_connection',
      type: 'opinion_scale',
      text: 'How important is it for you to have a personal connection with your co-founder(s)?',
      min: 1,
      max: 5,
    },
    {
      id: 'shared_values',
      type: 'opinion_scale',
      text: 'How important is it for you to share common values and vision with your co-founder(s)?',
      min: 1,
      max: 5,
    },
    {
      id: 'complementary_skills',
      type: 'opinion_scale',
      text: 'How important is it for you to have complementary skills and expertise with your co-founder(s)?',
      min: 1,
      max: 5,
    },
    {
      id: 'challenge_ideas',
      type: 'opinion_scale',
      text: 'Do you prefer to work with co-founder(s) who challenge your ideas and assumptions?',
      min: 1,
      max: 5,
    },
    {
      id: 'clear_roles',
      type: 'opinion_scale',
      text: 'How important is it for you to have clear roles and responsibilities with your co-founder(s)?',
      min: 1,
      max: 5,
    },
    {
      id: 'trust_transparency',
      type: 'opinion_scale',
      text: 'How important is trust and transparency in your relationship with your co-founder(s)?',
      min: 1,
      max: 5,
    },
  ];

  
const InterpersonalDynamics = ({ currentQuestion }) => {
  const question = questions[currentQuestion];

  return (
    <div className="interpersonal-dynamics w-3/4 p-6">
      <h2 className="text-2xl font-bold text-center">{question.text}</h2>
      <QuestionRenderer question={question} />
    </div>
  );
};

export default InterpersonalDynamics;
