import React, { useEffect, useState } from 'react'; // Fixed typo: useEffect
import TextInput from './TextInput';
import TextArea from './TextArea';
import MultipleChoice from './MultipleChoice';
import OpinionScale from './OpinionScale';
import YesNo from './YesNo';
import MultipleSelection from './MultipleSelection';
import Ranking from './Ranking';

const QuestionRenderer = ({ question, savedAnswers = {}, onSaveAnswer }) => { // Remove the duplicate line
  const savedAnswer = savedAnswers[question.id];
  const [currentAnswer, setCurrentAnswer] = useState(() => {
    if (savedAnswer?.answer) {
      return savedAnswer.answer;
    }
    return null;
  });

  useEffect(() => {
    if (onSaveAnswer && currentAnswer !== null) {
      onSaveAnswer({
        questionId: question.id,
        answer: currentAnswer,
      });
    }
  }, [currentAnswer, onSaveAnswer, question.id]);

  const handleAnswerChange = (newAnswer) => {
    setCurrentAnswer(newAnswer);
    onSaveAnswer({ questionId: question.id, answer: newAnswer });
  };
  
  const handleSubAnswerChange = (index, newAnswer) => {
    const updatedAnswers = currentAnswer
      ? [...currentAnswer]
      : question.subInputs.map((subInput) => ({ ...subInput, value: '' }));
    updatedAnswers[index].value = newAnswer;
    setCurrentAnswer(updatedAnswers);
    onSaveAnswer({ questionId: question.id, answer: updatedAnswers.map((subInput) => subInput.value) });
  };
  
  

  switch (question.type) {
    case 'input':
      return (
        <div className="flex space-x-4">
          {question.subInputs.map((subInput, index) => (
            <TextInput
              key={subInput.id}
              id={subInput.id}
              label={subInput.label}
              placeholder={subInput.placeholder}
              currentAnswer={currentAnswer?.[index]?.value || ''}
              onAnswerChange={(newAnswer) => handleSubAnswerChange(index, newAnswer)}
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
          onAnswerChange={handleAnswerChange}
        />
      );
    case 'multiple_choice':
      return (
        <MultipleChoice
          id={question.id}
          label={question.label}
          options={question.options}
          currentAnswer={currentAnswer}
          onAnswerChange={handleAnswerChange}
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
          onAnswerChange={handleAnswerChange}
        />
      );

    case 'yes_no':
      return (
        <YesNo
          id={question.id}
          label={question.label}
          currentAnswer={currentAnswer}
          onAnswerChange={handleAnswerChange}
        />
      );
    case 'multiple_selection':
      return (
        <MultipleSelection
          id={question.id}
          label={question.label}
          options={question.options}
          currentAnswer={currentAnswer}
          onAnswerChange={handleAnswerChange}
        />
      );
    case 'ranking':
      return (
        <Ranking
          id={question.id}
          label={question.label}
          options={question.options}
          currentAnswer={currentAnswer}
          onAnswerChange={handleAnswerChange}
        />
      );
    default:
      return null;
  }
};

export default QuestionRenderer;
