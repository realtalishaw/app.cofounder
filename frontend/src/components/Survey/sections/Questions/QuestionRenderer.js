import React from 'react'; // Fixed typo: useEffect
import TextInput from './TextInput';
import TextArea from './TextArea';
import MultipleChoice from './MultipleChoice';
import OpinionScale from './OpinionScale';
import YesNo from './YesNo';
import MultipleSelection from './MultipleSelection';
import Ranking from './Ranking';

const QuestionRenderer = ({ question, formMethods }) => { // Remove the duplicate line


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
              formMethods={formMethods}
            />
          ))}
        </div>
      );
    
    case 'textarea':
      return (
        <TextArea
          id={question.id}
          label={question.label}
          formMethods={formMethods}
        />
      );
    case 'multiple_choice':
      return (
        <MultipleChoice
          id={question.id}
          label={question.label}
          options={question.options}
          formMethods={formMethods}
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
          formMethods={formMethods}
        />
      );

    case 'yes_no':
      return (
        <YesNo
          id={question.id}
          label={question.label}
          formMethods={formMethods}
        />
      );
    case 'multiple_selection':
      return (
        <MultipleSelection
          id={question.id}
          label={question.label}
          options={question.options}
          formMethods={formMethods}
        />
      );
    case 'ranking':
      return (
        <Ranking
          id={question.id}
          label={question.label}
          options={question.options}
          formMethods={formMethods}
        />
      );
    default:
      return null;
  }
};

export default QuestionRenderer;
