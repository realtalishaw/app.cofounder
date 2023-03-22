import React from 'react';
import QuestionRenderer from './Questions/QuestionRenderer';


export const questions = [
  {
    id: 'location',
    type: 'input',
    text: "Where are you currently located? (Please provide your city and country)",
    subInputs: [
      {
        id: 'city',
        label: 'city',
        placeholder: 'City',
      },
      {
        id: 'Country',
        label: 'Country',
        placeholder: 'Country',
      },
    ],
  },
  {
    id: 'time_zone',
    type: 'multiple_choice',
    text: 'What is your current time zone?',
    options: [
      { value: 'utc_12_to_utc_8', label: 'UTC-12 to UTC-8 (e.g., Pacific Time, Alaska Time)' },
      { value: 'utc_7_to_utc_4', label: 'UTC-7 to UTC-4 (e.g., Mountain Time, Eastern Time)' },
      { value: 'utc_3_to_utc', label: 'UTC-3 to UTC (e.g., Brazil, Western Europe)' },
      { value: 'utc_1_to_utc_4', label: 'UTC+1 to UTC+4 (e.g., Central Europe, Middle East)' },
      { value: 'utc_5_to_utc_8', label: 'UTC+5 to UTC+8 (e.g., India, China, Southeast Asia)' },
      { value: 'utc_9_to_utc_12', label: 'UTC+9 to UTC+12 (e.g., Japan, Australia, New Zealand)' },
      { value: 'other', label: 'Other (Please specify)' },
    ],
  },
  {
    id: 'preferred_region',
    type: 'multiple_choice',
    text: 'In which country or region do you prefer to start your business?',
    options: [
      { value: 'north_america', label: 'North America' },
      { value: 'europe', label: 'Europe' },
      { value: 'asia', label: 'Asia' },
      { value: 'south_america', label: 'South America' },
      { value: 'africa', label: 'Africa' },
      { value: 'oceania', label: 'Oceania' },
      { value: 'remote_no_preference', label: 'Remote/No preference' },
    ],
  },
  {
    id: 'relocation',
    type: 'multiple_choice',
    text: 'Are you open to relocating for your startup?',
    options: [
      { value: 'relocate_anywhere', label: 'Yes, I\'m willing to relocate anywhere.' },
      { value: 'relocate_within_country', label: 'Yes, but only within my current country or region.' },
      { value: 'no_relocation', label: 'No, I prefer to stay in my current location.' },
    ],
  },
  {
    id: 'work_arrangement',
    type: 'multiple_choice',
    text: 'What is your preferred work arrangement for your startup?',
    options: [
      { value: 'in_person', label: 'In-person' },
      { value: 'remote', label: 'Remote' },
      { value: 'hybrid', label: 'Hybrid' },
    ],
  },
  {
    id: 'commitment_level',
    type: 'multiple_choice',
    text: 'How much time per week are you able to commit to your startup?',
    options: [
      { value: 'full_time', label: 'Full-time (40+ hours per week)' },
      { value: 'part_time', label: 'Part-time (20-40 hours per week)' },
      { value: 'limited_availability', label: 'Limited availability (less than 20 hours per week)' },
    ],
  },
  {
    id: 'work_schedule',
    type: 'multiple_selection',
    text: 'When do you prefer to work on your startup?',
    options: [
      { value: 'weekdays', label: 'Weekdays' },
      { value: 'weekends', label: 'Weekends' },
      { value: 'mornings', label: 'Mornings' },
      { value: 'afternoons', label: 'Afternoons' },
      { value: 'evenings', label: 'Evenings' },
      { value: 'late_nights', label: 'Late nights' },
    ],
  },
  {
    id: 'launch_timeline',
    type: 'multiple_choice',
    text: 'How soon are you looking to launch your startup?',
    options: [
      { value: 'immediately', label: 'Immediately (within the next month)' },
      { value: '3_6_months', label: 'In the next 3-6 months' },
      { value: '6_12_months', label: 'In the next 6-12 months' },
      { value: 'more_than_year', label: 'More than a year from now' },
    ],
  },
]

  
  const LocationAvailability = ({ currentQuestion, formMethods, onSubmit }) => {
    const question = questions[currentQuestion];
  
    return (
      <div className="location-availability w-3/4 p-6">
        <h2 className="text-2xl font-bold text-center">{question.text}</h2>
        <QuestionRenderer question={question} formMethods={formMethods} onSubmit={onSubmit} />
      </div>
    );
  };
  
  export default LocationAvailability;
  