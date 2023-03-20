import React from 'react';

const NavigationButtons = ({
  handleBack,
  handleNext,
  currentSection,
  currentQuestion,
  sections,
  totalAnsweredQuestions,
  totalQuestions,
}) => {
  if (!sections) {
    return null;
  }

  const isBackDisabled = currentSection === 0 && currentQuestion === 0;
  const isNextDisabled = false; // You can update this condition if needed
  const isLastQuestion = totalAnsweredQuestions + 1 === totalQuestions;



  const NavigationButton = ({ text, disabled, onClick, extraClassName }) => {
    return (
      <button
        className={`${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        } px-4 py-2 rounded-md font-bold text-white ${
          extraClassName ? extraClassName : 'bg-indigo-600 hover:bg-indigo-700'
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  };


  return (
    <div className="navigation-buttons flex space-x-6">
      <NavigationButton text="Back" disabled={isBackDisabled} onClick={handleBack} />
      <NavigationButton
        text={isLastQuestion ? 'Submit' : 'Next'}
        disabled={isNextDisabled}
        onClick={handleNext}
        extraClassName={isLastQuestion ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500' : ''}
      />
    </div>
  );
};

export default NavigationButtons;
