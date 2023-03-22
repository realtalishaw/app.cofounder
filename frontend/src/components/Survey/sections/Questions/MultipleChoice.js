import React from 'react';

const MultipleChoice = ({ id, label, options, formMethods }) => {
  const { register } = formMethods;

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
              {...register(id)}
              value={option.value}
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
