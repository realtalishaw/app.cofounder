import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';
import { saveAnswer } from '../../services/answerService';

export const questions = [
    {
    id: 'capital_raised',
    type: 'multiple_choice',
    text: 'Have you ever raised capital for a startup before?',
    options: [
    { value: 'yes', label: 'Yes, I have successfully raised capital' },
    { value: 'tried', label: 'No, but I have tried to raise capital' },
    { value: 'never', label: 'No, I have never raised capital or tried to' },
    ],
    },
    {
    id: 'financial_situation',
    type: 'multiple_choice',
    text: 'What is your current personal financial situation?',
    options: [
    { value: 'significant', label: 'Stable, with significant savings' },
    { value: 'moderate', label: 'Stable, with moderate savings' },
    { value: 'limited', label: 'Stable, but with limited savings' },
    { value: 'unstable', label: 'Unstable, with little or no savings' },
    ],
    },
    {
    id: 'personal_investment',
    type: 'multiple_choice',
    text: 'Are you willing to invest your personal savings into your startup?',
    options: [
    { value: 'significant', label: 'Yes, I am willing to invest a significant portion of my savings' },
    { value: 'limited', label: 'Yes, but I can only invest a limited amount' },
    { value: 'no', label: 'No, I am not willing to invest my personal savings' },
    ],
    },
    {
    id: 'funding_strategy',
    type: 'multiple_choice',
    text: 'What is your preferred funding strategy for your startup?',
    options: [
    { value: 'bootstrapping', label: 'Bootstrapping/self-funding' },
    { value: 'investors', label: 'Raising capital from investors' },
    { value: 'combination', label: 'A combination of bootstrapping and raising capital' },
    { value: 'other', label: 'Other (please specify)' },
    ],
    },
    {
    id: 'equity_sharing',
    type: 'multiple_choice',
    text: 'How do you feel about equity sharing with your co-founder(s)?',
    options: [
    { value: 'fairly', label: 'I am open to sharing equity fairly based on each co-founder\'s contributions' },
    { value: 'majority_control', label: 'I prefer to maintain majority control and offer a smaller equity stake to my co-founder(s)' },
    { value: 'negotiating', label: 'I am open to negotiating equity sharing based on the specific circumstances' },
    ],
    },
    {
    id: 'legal_knowledge',
    type: 'multiple_choice',
    text: 'Are you familiar with the legal aspects of starting a business (e.g., incorporation, intellectual property, contracts)?',
    options: [
    { value: 'experienced', label: 'Yes, I have experience with the legal aspects of starting a business' },
    { value: 'basic', label: 'Somewhat, I have a basic understanding but may need help' },
    { value: 'not_familiar', label: 'No, I am not familiar with the legal aspects of starting a business' },
    ],
    },
    ];

const FinancialAndLegalMatters = ({ currentQuestion, savedAnswers }) => {
    const question = questions[currentQuestion];

    return (
        <div className="financial-legal-matters w-3/4 p-6">
            <h2 className="text-2xl font-bold text-center">{question.text}</h2>
            <QuestionRenderer

  question={question}

  savedAnswers={savedAnswers}

  onSaveAnswer={saveAnswer}

/>
        </div>
    );
};

export default FinancialAndLegalMatters;
