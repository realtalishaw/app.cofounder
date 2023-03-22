import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';


export const questions = [
  {
    id: 'workstyle_1',
    text: 'How would you describe your work style? (Choose one)',
    type: 'multiple_choice',
    options: [
      { value: 'structured', label: 'Structured and organized' },
      { value: 'flexible', label: 'Flexible and adaptable' },
      { value: 'collaborative', label: 'Collaborative and team-oriented' },
      { value: 'independent', label: 'Independent and self-directed' },
    ],
  },
  {
    id: 'workstyle_2',
    text: 'How do you prefer to communicate with your team? (Select all that apply)',
    type: 'multiple_selection',
    options: [
      { value: 'in_person', label: 'In-person meetings' },
      { value: 'video_calls', label: 'Video calls' },
      { value: 'phone_calls', label: 'Phone calls' },
      { value: 'email', label: 'Email' },
      { value: 'instant_messaging', label: 'Instant messaging (e.g., Slack, WhatsApp)' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'workstyle_3',
    text: 'How do you handle stress and tight deadlines?',
    type: 'multiple_choice',
    options: [
      { value: 'work_well_under_pressure', label: 'I work well under pressure and can stay focused on the task at hand.' },
      { value: 'relaxed_timelines', label: 'I prefer to work on projects with more relaxed timelines.' },
      { value: 'procrastinate', label: 'I tend to procrastinate but can still deliver quality work when needed.' },
      { value: 'struggle_with_stress', label: 'I sometimes struggle to manage stress and may need extra support during high-pressure situations.' },
    ],
  },
  {
    id: 'workstyle_4',
    text: 'Do you prefer to work on one project at a time or multitask on multiple projects?',
    type: 'multiple_choice',
    options: [
      { value: 'one_project', label: 'One project at a time' },
      { value: 'multitasking', label: 'Multitasking on multiple projects' },
      { value: 'depends', label: 'It depends' },
    ],
  },
  {
    id: 'workstyle_5',
    text: 'How important is work-life balance to you?',
    type: 'multiple_choice',
    options: [
      { value: 'very_important', label: 'Very important – I prioritize maintaining a healthy balance between work and personal life.' },
      { value: 'somewhat_important', label: 'Somewhat important – I value work-life balance, but I can occasionally work long hours when needed.' },
      { value: 'not_very_important', label: 'Not very important – I\'m willing to sacrifice personal time for the success of the startup.' },
    ],
  },
];

  

const WorkStyle = ({ currentQuestion, formMethods, onSubmit }) => {
  const question = questions[currentQuestion];

  return (
    <div className="work-style w-3/4 p-6">
      <h2 className="text-2xl font-bold text-center">{question.text}</h2>
      <QuestionRenderer question={question} formMethods={formMethods} onSubmit={onSubmit} />
    </div>
  );
};

export default WorkStyle;
