import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';

export const questions = [
  {
    id: 'experience_field_of_expertise',
    text: 'What is your primary field of expertise? (Choose one)',
    type: 'multiple_choice',
    options: [
      { value: 'design_and_user_experience', label: 'Design and user experience' },
      { value: 'programming_and_development', label: 'Programming and development' },
      { value: 'sales_and_marketing', label: 'Sales and marketing' },
      { value: 'project_management', label: 'Project management' },
      { value: 'product_management', label: 'Product management' },
      { value: 'finance_and_accounting', label: 'Finance and accounting' },
      { value: 'operations_and_logistics', label: 'Operations and logistics' },
      { value: 'networking_and_partnerships', label: 'Networking and partnerships' },
      { value: 'legal_and_regulatory', label: 'Legal and regulatory' },
      { value: 'other', label: 'Other (please specify)' },
    ],
  },
  {
    id: 'experience_years_primary_field',
    text: 'How many years of experience do you have in your primary field of expertise?',
    type: 'input',
    subInputs: [
      {
        id: 'years_of_experience',
        label: 'Years of experience',
        placeholder: 'Enter number of years',
      },
    ],
  },
  {
    id: 'experience_previous_startups',
    text: 'Have you previously founded or co-founded a startup? If yes, please provide details about the startup(s) and your role(s).',
    type: 'textarea',
    label: 'Previous startup experience',
  },
  {
    id: 'experience_previous_funding',
    text: 'If you have founded or co-founded a startup, did you raise any funding? If so, how much and from which sources (e.g. angel investors, venture capital, grants)?',
    type: 'textarea',
    label: 'Previous startup funding',
  },
  {
    id: 'experience_accelerator_incubator',
    text: 'If applicable, have you participated in any accelerator or incubator programs? If yes, please provide details.',
    type: 'textarea',
    label: 'Accelerator or incubator programs',
  },
  {
    id: 'experience_industries',
    text: 'What industries have you worked in? (Select all that apply)',
    type: 'multiple_selection',
    options: [
      { value: 'technology', label: 'Technology' },
      { value: 'healthcare', label: 'Healthcare' },
      { value: 'finance', label: 'Finance' },
      { value: 'retail', label: 'Retail' },
      { value: 'manufacturing', label: 'Manufacturing' },
      { value: 'education', label: 'Education' },
      { value: 'non_profit', label: 'Non-profit' },
      { value: 'media_and_entertainment', label: 'Media and entertainment' },
      { value: 'energy_and_environment', label: 'Energy and environment' },
      { value: 'real_estate_and_construction', label: 'Real estate and construction' },
      { value: 'transportation_and_logistics', label: 'Transportation and logistics' },
      { value: 'food_and_agriculture', label: 'Food and agriculture' },
      { value: 'travel_and_tourism', label: 'Travel and tourism' },
      { value: 'other', label: 'Other (please specify)' },
    ],
  },
  {
    id: 'experience_managed_team',
    text: 'Have you ever managed a team? If so, what was the largest team size you managed?',
    type: 'input',
    subInputs: [
      {
        id: 'largest_team_size',
        label: 'Largest team size managed',
        placeholder: 'Enter team size',
      },
    ],
  },
  {
    id: 'experience_significant_achievements',
    text: 'Describe any significant achievements or successes in your professional experience.',
    type: 'textarea',
    label: 'Significant achievements',
  },
];


  

const Experience = ({ currentQuestion }) => {
  const question = questions[currentQuestion];

  return (
    <div className="experience w-3/4 p-6">
      <h2 className="text-2xl font-bold text-center">{question.text}</h2>
      <QuestionRenderer question={question} />
    </div>
  );
};

export default Experience;
