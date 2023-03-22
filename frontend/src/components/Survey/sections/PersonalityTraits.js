import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';

export const questions = [
  {
    id: 'intro_extro',
    type: 'opinion_scale',
    text: 'How would you describe your level of introversion/extroversion?',
    scale: {
      min: 1,
      max: 5,
      labels: [
        'Highly introverted',
        'Somewhat introverted',
        'Balanced between introversion and extroversion',
        'Somewhat extroverted',
        'Highly extroverted',
      ],
    },
  },

  {
    id: 'logic_intuition',
    type: 'opinion_scale',
    text: 'When making decisions, do you rely more on logic and analysis or intuition and feelings?',
    scale: {
      min: 1,
      max: 3,
      labels: ['Mostly logic and analysis', 'A balance of logic and intuition', 'Mostly intuition and feelings'],
    },
  },
  {
    id: 'conflict_resolution',
    type: 'multiple_choice',
    text: 'How do you approach conflict resolution?',
    options: [
      { value: 'direct', label: 'I confront conflicts directly and address issues as they arise.' },
      { value: 'avoid', label: 'I prefer to avoid conflict and work around issues if possible.' },
      { value: 'compromise', label: 'I seek compromise and try to find solutions that satisfy all parties.' },
    ],
  },
  {
    id: 'feedback',
    type: 'multiple_choice',
    text: 'How open are you to feedback and constructive criticism?',
    options: [
      { value: 'very_open', label: 'Very open – I appreciate feedback and use it as an opportunity to grow and improve.' },
      { value: 'somewhat_open', label: 'Somewhat open – I\'m open to feedback but may need time to process it.' },
      { value: 'not_open', label: 'Not very open – I prefer to work independently and rely on my own judgment.' },
    ],
  },
  {
    id: 'risk_tolerance',
    type: 'multiple_choice',
    text: 'How would you describe your risk tolerance?',
    options: [
      { value: 'high', label: 'High – I\'m willing to take significant risks for the potential of greater rewards.' },
      { value: 'moderate', label: 'Moderate – I\'m comfortable with some risk but prefer a balanced approach.' },
      { value: 'low', label: 'Low – I prefer to minimize risk and make more conservative decisions.' },
    ],
  },
  {
    id: 'setbacks',
    type: 'multiple_choice',
    text: 'How do you handle setbacks or failures?',
    options: [
      { value: 'learn', label: 'I view setbacks as learning opportunities and use them to improve.' },
      { value: 'regroup', label: 'I take some time to process setbacks before regrouping and moving forward.' },
      { value: 'dwell', label: 'I tend to dwell on setbacks and may struggle to bounce back quickly.' },
    ],
  },
  {
    id: 'recognition',
    type: 'multiple_choice',
    text: 'How important is it for you to be recognized for your achievements?',
    options: [
      { value: 'very_important', label: 'Very important – I appreciate recognition and validation from others.' },
      { value: 'somewhat_important', label: 'Somewhat important – Recognition is nice, but it\'s not my primary motivator.' },
      { value: 'not_important', label: 'Not very important – I\'m more focused on achieving my personal goals than receiving external recognition.' },
    ],
  },
  {
    id: 'problem_solving',
    type: 'multiple_choice',
    text: 'How do you approach problem-solving?',
    options: [
      { value: 'creative', label: 'I prefer to brainstorm creative solutions and think outside the box.' },
      { value: 'established', label: 'I rely on tried-and-true methods and established best practices.' },
      { value: 'input', label: 'I gather input from others and consider multiple perspectives before making a decision.' }
    ]
  }
]  
  

const PersonalityTraits = ({ currentQuestion, formMethods, onSubmit }) => {
  const question = questions[currentQuestion];

  return (
    <div className="personality-traits w-3/4 p-6">
      <h2 className="text-2xl font-bold text-center">{question.text}</h2>
      <QuestionRenderer question={question} formMethods={formMethods} onSubmit={onSubmit} />
    </div>
  );
};

export default PersonalityTraits;
