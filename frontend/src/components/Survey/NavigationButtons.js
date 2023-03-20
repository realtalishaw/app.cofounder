import React from 'react';

const NavigationButtons = ({ handleBack, handleNext, currentSection, currentQuestion }) => {
  const isBackDisabled = currentSection === 0 && currentQuestion === 0;
  const isNextDisabled = false; // You can update this condition if needed

  const NavigationButton = ({ text, disabled, onClick }) => {
    return (
      <button
        className={`${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        } px-4 py-2 rounded-md font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
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
      <NavigationButton text="Next" disabled={isNextDisabled} onClick={handleNext} />
    </div>
  );
};

export default NavigationButtons;
