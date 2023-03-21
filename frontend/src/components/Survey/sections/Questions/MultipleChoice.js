import React from 'react';

const MultipleChoice = ({ id, label, options, currentAnswer, onAnswerChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onAnswerChange(value);
  };

  return (
    <div className="multiple-choice">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-2">
        {options.map((option, index) => (
          <div key={index} className="my-2">
            <input
              type="radio"
              id={`${id}-${index}`}
              name={id}
              value={option.value}
              checked={currentAnswer === option.value}
              onChange={handleChange}
              className="text-indigo-600 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label
              htmlFor={`${id}-${index}`}
              className="ml-2 text-sm text-gray-700"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoice;
