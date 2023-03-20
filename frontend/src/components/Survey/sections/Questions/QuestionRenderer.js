// src/Questions/QuestionRenderer.js
import React, { useEffect, useState } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import MultipleChoice from './MultipleChoice';
import OpinionScale from './OpinionScale';
import YesNo from './YesNo';
import MultipleSelection from './MultipleSelection';
import Ranking from './Ranking';

const QuestionRenderer = ({ question }) => {
  // Set the answer state based on local storage or initialize it to null
  const [currentAnswer, setCurrentAnswer] = useState(
    () => localStorage.getItem(`survey-answer-${question.id}`) || null
  );

  // Save the answer to local storage when the answer changes
  useEffect(() => {
    if (currentAnswer !== null) {
      localStorage.setItem(`survey-answer-${question.id}`, currentAnswer);
    }
  }, [currentAnswer, question.id]);

  switch (question.type) {
    case 'input':
      return (
        <div className="flex space-x-4">
          {question.subInputs.map((subInput) => (
            <TextInput
              key={subInput.id}
              id={subInput.id}
              label={subInput.label}
              placeholder={subInput.placeholder}
              currentAnswer={currentAnswer}
              onAnswerChange={setCurrentAnswer}
            />
          ))}
        </div>
      );
    case 'textarea':
      return (
        <TextArea
          id={question.id}
          label={question.label}
          currentAnswer={currentAnswer}
          onAnswerChange={setCurrentAnswer}
        />
      );
    case 'multiple_choice':
      return (
        <MultipleChoice
          id={question.id}
          label={question.label}
          options={question.options}
          currentAnswer={currentAnswer}
          onAnswerChange={setCurrentAnswer}
        />
      );
    case 'opinion_scale':
      const scaleMin = question.scale?.min || 1;
      const scaleMax = question.scale?.max || 5;
      const labels = question.scale?.hasOwnProperty('labels')
        ? question.scale.labels
        : ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
      return (
        <OpinionScale
          id={question.id}
          label={question.label}
          scaleMin={scaleMin}
          scaleMax={scaleMax}
          labels={labels}
          currentAnswer={currentAnswer}
          onAnswerChange={setCurrentAnswer}
        />
      );

    case 'yes_no':
      return (
        <YesNo
          id={question.id}
          label={question.label}
          currentAnswer={currentAnswer}
          onAnswerChange={setCurrentAnswer}
        />
      );
    case 'multiple_selection':
      return (
        <MultipleSelection
          id={question.id}
          label={question.label}
          options={question.options}
          currentAnswer={currentAnswer}
          onAnswerChange={setCurrentAnswer}
        />
      );
    case 'ranking':
      return (
        <Ranking
          id={question.id}
          label={question.label}
          options={question.options}
          currentAnswer={currentAnswer}
          onAnswerChange={setCurrentAnswer}
        />
      );
    default:
      return null;
  }
};

export default QuestionRenderer;
