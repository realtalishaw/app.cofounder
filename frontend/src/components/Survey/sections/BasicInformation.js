import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';

export const questions = [
    {
      id: 'name',
      type: 'input',
      text: 'What is your name?',
      subInputs: [
        { id: 'first_name', label: 'First Name', placeholder: 'First Name' },
        { id: 'last_name', label: 'Last Name', placeholder: 'Last Name' },
      ],
    },
    {
      id: 'pursuing_startup',
      type: 'multiple_choice',
      text: "Do you already have a startup or a startup idea you're pursuing?",
      options: [
        {
          value: 'committed',
          label:
            "Yes, I'm committed to an idea and I want a co-founder who can help me build it",
        },
        {
          value: 'exploring',
          label:
            "I have some ideas, but I'm also open to exploring other ideas",
        },
        {
          value: 'open',
          label:
            "No, I could help a co-founder with their existing idea or explore new ideas together",
        },
      ],
    },
    {
      id: 'startup_name',
      type: 'textarea',
      text: "If you're comfortable sharing, please provide the name of your current startup or the working title for your startup idea.",
      label: 'Startup Name',
    },
    {
      id: 'company_description',
      type: 'textarea',
      text: 'Describe your company or project in a few sentences.',
      label: 'Company Description',
    },
    {
      id: 'current_stage',
      type: 'multiple_choice',
      text: 'At what stage is your current startup or startup idea?',
      options: [
        { value: 'idea_stage', label: 'Idea Stage' },
        { value: 'prototype_mvp', label: 'Prototype or MVP' },
        { value: 'launched_product', label: 'Launched Product' },
        { value: 'growth_stage', label: 'Growth Stage' },
        { value: 'other', label: 'Other' },
      ],
    },
    {
        id: 'industry_sector',
        type: 'multiple_choice',
        text: 'In which industry sector does your startup or startup idea operate?',
        options: [
          { value: 'agriculture_agtech', label: 'Agriculture/Agtech' },
          { value: 'artificial_intelligence', label: 'Artificial Intelligence' },
          { value: 'augmented_reality_virtual_reality', label: 'Augmented Reality/Virtual Reality' },
          { value: 'b2b_enterprise', label: 'B2B/Enterprise' },
          { value: 'biomedical_biotech', label: 'Biomedical/Biotech' },
          { value: 'blockchain', label: 'Blockchain' },
          { value: 'climate_sustainability', label: 'Climate/Sustainability' },
          { value: 'consumer', label: 'Consumer' },
          { value: 'e_commerce', label: 'E-Commerce' },
          { value: 'developer_tools', label: 'Developer Tools' },
          { value: 'education_edtech', label: 'Education/Edtech' },
          { value: 'energy', label: 'Energy' },
          { value: 'entertainment', label: 'Entertainment' },
          { value: 'financial_fintech', label: 'Financial/Fintech' },
          { value: 'food_beverage', label: 'Food/Beverage' },
          { value: 'gaming', label: 'Gaming' },
          { value: 'government', label: 'Government' },
          { value: 'hardware', label: 'Hardware' },
          { value: 'hard_tech', label: 'Hard Tech' },
          { value: 'health_wellness', label: 'Health/Wellness' },
          { value: 'healthcare', label: 'Healthcare' },
          { value: 'marketplace', label: 'Marketplace' },
          { value: 'non_profit', label: 'Non-Profit' },
          { value: 'real_estate_proptech', label: 'Real Estate/Proptech' },
          { value: 'robotics', label: 'Robotics' },
          { value: 'security', label: 'Security' },
          { value: 'travel_tourism', label: 'Travel/Tourism' },
        ],
      },
      {
        id: 'problem_solution',
        type: 'textarea',
        text: 'Briefly describe the problem your startup or startup idea aims to solve and the solution it provides.',
        label: 'Problem and Solution',
      },
      {
        id: 'target_market',
        type: 'textarea',
        text: 'Who is your target market? Please describe your ideal customer or user.',
        label: 'Target Market',
      },
      {
        id: 'full_time_plans',
        type: 'multiple_choice',
        text: 'When do you want to start working on a startup full time?',
        options: [
          { value: 'already_full_time', label: "I'm already working full-time" },
          { value: 'ready_when_meet_cofounder', label: "I'm ready to go full-time as soon as I meet the right co-founder" },
          { value: 'next_year', label: "I'm planning to go full-time in the next year" },
          { value: 'no_specific_plans', label: "I don't have any specific plans yet" },
        ],
      },
  ];
  
const BasicInformation = ({ currentQuestion }) => {
  const question = questions[currentQuestion];

  return (
    <div className="basic-information w-3/4 p-6">
      <h2 className="text-2xl font-bold p-2 text-center">{question.text}</h2>
      <QuestionRenderer question={question} />
    </div>
  );
};

export default BasicInformation;
