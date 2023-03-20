import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';

export const questions = [
  {
    id: 'ranking_motivations',
    text: 'Please rank the following motivations for starting a company, with 1 being the most important to you and 5 being the least important.',
    type: 'ranking',
    options: [
      { id: 'financial_success', label: 'Financial success and wealth' },
      { id: 'positive_impact', label: 'Creating a positive impact on society or the environment' },
      { id: 'innovative_products', label: 'Developing innovative products or services' },
      { id: 'team_culture', label: 'Building a strong and supportive team culture' },
      { id: 'personal_growth', label: 'Personal growth and learning' },
    ],
  },
  {
    id: 'importance_of_company_culture',
    text: 'How important is having a clear and aligned company culture to you?',
    type: 'multiple_choice',
    options: [
      { value: 'extremely_important', label: 'Extremely important – Company culture is a top priority for me.' },
      { value: 'moderately_important', label: "Moderately important – I believe a good culture is important, but it's not the only factor in success." },
      { value: 'less_important', label: "Less important – I'm more focused on product development and market success." },
    ],
  },
  {
    id: 'vision_for_growth',
    text: 'What is your vision for the long-term growth of your startup?',
    type: 'multiple_choice',
    options: [
      { value: 'rapid_growth', label: 'Rapid growth with the goal of becoming a market leader' },
      { value: 'steady_growth', label: 'Steady growth with a focus on sustainability and profitability' },
      { value: 'small_scale', label: 'Smaller scale with a strong focus on niche markets and customer satisfaction' },
    ],
  },
  {
    id: 'importance_of_csr',
    text: 'How important is corporate social responsibility (CSR) to you?',
    type: 'multiple_choice',
    options: [
      { value: 'very_important', label: 'Very important – CSR is a key factor in my decision-making and company strategy.' },
      { value: 'somewhat_important', label: "Somewhat important – I value CSR, but it's not my primary focus." },
      { value: 'not_important', label: "Not very important – I'm more focused on other aspects of the business." },
    ],
  },
  {
    id: 'definition_of_success',
    text: 'How do you define success for your startup?',
    type: 'multiple_choice',
    options: [
      { value: 'financial_performance', label: 'Financial performance and market share' },
      { value: 'customer_satisfaction', label: 'Customer satisfaction and loyalty' },
      { value: 'societal_impact', label: 'Impact on society or the environment' },
      { value: 'team_growth', label: 'Team growth and development' },
      { value: 'personal_fulfillment', label: 'Personal fulfillment and achievement' },
    ],
  },
];

  

const ValuesAndVision = ({ currentQuestion }) => {
  const question = questions[currentQuestion];

  return (
    <div className="values-and-vision w-3/4 p-6">
      <h2 className="text-2xl font-bold text-center">{question.text}</h2>
      <QuestionRenderer question={question} />
    </div>
  );
};

export default ValuesAndVision;
