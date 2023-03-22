// src/sections/PersonalityType.js
import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';

export const questions = [
    {
      id: 'personality_1',
      type: 'opinion_scale',
      text: "I'm often seen as the creative person in a group.",
    },
    {
      id: 'personality_2',
      type: 'opinion_scale',
      text: 'I enjoy solving complex technical problems.',
    },
    {
      id: 'personality_3',
      type: 'opinion_scale',
      text: "I'm skilled at pitching ideas and convincing others.",
    },
    {
      id: 'personality_4',
      type: 'opinion_scale',
      text: 'Visual aesthetics and design are important to me.',
    },
    {
      id: 'personality_5',
      type: 'opinion_scale',
      text: "I'm passionate about learning new programming languages and technologies.",
    },
    {
      id: 'personality_6',
      type: 'opinion_scale',
      text: "I have a strong interest in business development and strategy.",
    },
    {
      id: 'personality_7',
      type: 'opinion_scale',
      text: "I often come up with innovative ideas and concepts.",
    },
    {
      id: 'personality_8',
      type: 'opinion_scale',
      text: "I enjoy optimizing systems for better performance and efficiency.",
    },
    {
      id: 'personality_9',
      type: 'opinion_scale',
      text: "I'm good at networking and building relationships with others.",
    },
    {
      id: 'personality_10',
      type: 'opinion_scale',
      text: "I'm drawn to artistic pursuits in my free time.",
    },
    {
      id: 'personality_11',
      type: 'opinion_scale',
      text: "I find satisfaction in debugging and troubleshooting software issues.",
    },
    {
      id: 'personality_12',
      type: 'opinion_scale',
      text: "I'm able to motivate and inspire a team to achieve a common goal.",
    },
    {
      id: 'personality_13',
      type: 'opinion_scale',
      text: "I can easily envision the look and feel of a product.",
    },
    {
      id: 'personality_14',
      type: 'opinion_scale',
      text: "I'm fascinated by the latest tech trends and gadgets.",
    },
    {
      id: 'personality_15',
      type: 'opinion_scale',
      text: "I have experience in sales and marketing.",
    },
  ];
  
const PersonalityType = ({ currentQuestion, formMethods, onSubmit }) => {
  const question = questions[currentQuestion];

  return (
    <div className="personality-type w-3/4 p-6">
      <h2 className="text-2xl font-bold text-center">{question.text}</h2>
      <QuestionRenderer question={question} formMethods={formMethods} onSubmit={onSubmit} />
    </div>
  );
};

export default PersonalityType;
