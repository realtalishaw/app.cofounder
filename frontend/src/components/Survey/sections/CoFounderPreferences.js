import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';

export const questions = [{
  id: 'cofounder_startup_idea', 
  type: 'multiple_choice', 
  text: 'Do you prefer a co-founder who already has a startup idea or someone who is open to exploring new ideas with you?', 
  options: [
    { value: 'startup_idea', label: 'I prefer a co-founder with a startup idea' }, 
    { value: 'open_to_exploring', label: 'I prefer a co-founder open to exploring new ideas' }, 
    { value: 'multiple_ideas', label: 'I prefer a co-founder with multiple ideas' }, 
    { value: 'no_preference', label: 'No preference' },],
},
{
  id: 'cofounder_skillset',
  type: 'multiple_choice',
  text: 'Which skillset do you believe your co-founder(s) should excel in? (Select all that apply)',
  options: [
    { value: 'technical', label: 'Technical' },
    { value: 'design', label: 'Design' },
    { value: 'sales_marketing', label: 'Sales/Marketing' },
    { value: 'operations', label: 'Operations' },
    { value: 'other', label: 'Other (please specify)' },
    { value: 'no_preference', label: 'No preference' },
  ],
},
{
  id: 'cofounder_experience',
  type: 'multiple_choice',
  text: 'What level of experience do you prefer in a co-founder?',
  options: [
    { value: 'less_than_5_years', label: 'Less than 5 years' },
    { value: '5_to_10_years', label: '5-10 years' },
    { value: 'more_than_10_years', label: 'More than 10 years' },
    { value: 'no_preference', label: 'No preference' },
  ],
},
{
  id: 'cofounder_work_style',
  type: 'multiple_choice',
  text: 'What is your preferred work style for a co-founder?',
  options: [
    { value: 'independent', label: 'Independent' },
    { value: 'collaborative', label: 'Collaborative' },
    { value: 'mix_of_both', label: 'A mix of both' },
    { value: 'no_preference', label: 'No preference' },
  ],
},
{
  id: 'cofounder_values_vision',
  type: 'opinion_scale',
  text: 'How important is it for your co-founder to share your values and vision?',
  minLabel: 'Not important',
  maxLabel: 'Extremely important',
},
{
  id: 'cofounder_location',
  type: 'opinion_scale',
  text: 'How important is it for your co-founder to be located in the same city or region as you?',
  minLabel: 'Not important',
  maxLabel: 'Extremely important',
},
];

const CoFounderPreferences = ({ currentQuestion }) => {
  const question = questions[currentQuestion];

  return (
    <div className="co-founder-preferences w-3/4 p-6">
      <h2 className="text-2xl font-bold text-center">{question.text}</h2>
      <QuestionRenderer question={question} />
    </div>
  );
};

export default CoFounderPreferences;
