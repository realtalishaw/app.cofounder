import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';

export const questions = [
  {
    id: 'decision_making',
    type: 'multiple_choice',
    text: 'When faced with a difficult decision, do you tend to rely more on intuition or analysis?',
   options: [
      { value: 'intuition', label: 'Intuition' },
      { value: 'analysis', label: 'Analysis' },
      { value: 'balance', label: 'A balance of both' },
    ],
  },
  {
    id: 'conflict_resolution',
    type: 'multiple_choice',
    text: 'How do you handle disagreements or conflicts with your co-founder(s)?',
   options: [
      { value: 'direct', label: 'I prefer to address the issue directly and discuss it openly.' },
      { value: 'calmly', label: 'I prefer to take time to process my thoughts and then discuss the issue calmly.' },
      { value: 'avoid', label: 'I tend to avoid confrontation and try to resolve the issue indirectly.' },
    ],
  },
  {
    id: 'important_decisions',
    type: 'multiple_choice',
    text: 'How do you make important decisions with your co-founder(s)?',
   options: [
      { value: 'consensus', label: 'We discuss the issue and come to a consensus.' },
      { value: 'debate', label: 'We debate the issue and the most persuasive argument wins.' },
      { value: 'expertise', label: 'We each make decisions within our areas of expertise.' },
    ],
  },
  {
    id: 'feedback',
    type: 'multiple_choice',
    text: 'How do you prefer to give and receive feedback from your co-founder(s)?',
   options: [
      { value: 'direct', label: 'I prefer direct, honest feedback, even if it\'s critical.' },
      { value: 'constructive', label: 'I prefer constructive feedback that focuses on specific areas for improvement.' },
      { value: 'gentle', label: 'I prefer gentle feedback that emphasizes the positive aspects of my work.' },
    ],
  },
  {
    id: 'disagreement_scenario',
    type: 'multiple_choice',
    text: 'Imagine you and your co-founder have a disagreement about the direction of the startup. What would you do?',
   options: [
      { value: 'meeting', label: 'Schedule a meeting to discuss the issue and try to reach a compromise.' },
      { value: 'third_party', label: 'Seek input from a trusted third party, such as an advisor or mentor.' },
      { value: 'pursue', label: 'Allow each co-founder to pursue their preferred direction and compare the results.' },
    ],
  },
  {
    id: 'missing_deadlines_scenario',
    type: 'multiple_choice',
    text: 'Your co-founder is consistently missing deadlines, which is affecting the progress of the startup. How would you address this issue?',
   options: [
      { value: 'direct', label: 'Have a direct conversation about the problem and ask for an explanation.' },
      { value: 'support', label: 'Offer support and resources to help your co-founder manage their workload.' },
      { value: 'reevaluate', label: 'Reevaluate the deadlines and adjust them if necessary.' },
    ],
  },
  {
    id: 'difficult_conversation_scenario',
    type: 'multiple_choice',
    text: 'You notice that your co-founder is avoiding a difficult conversation about a potential problem with the product. What would you do?',
    options: [
    { value: 'bring_up', label: 'Bring up the issue and encourage an open discussion about potential solutions.' },
    { value: 'wait', label: 'Wait until your co-founder is ready to discuss the issue.' },
    { value: 'address_independently', label: 'Address the problem independently and present a solution to your co-founder.' },
    ],
    },
  ] 


const ConflictResolution = ({ currentQuestion }) => {
  const question = questions[currentQuestion];
  
  return (
    <div className="conflict-resolution w-3/4 p-6">
      <h2 className="text-2xl font-bold text-center">{question.text}</h2>
      <QuestionRenderer question={question} />
    </div>
  );
};

export default ConflictResolution;
