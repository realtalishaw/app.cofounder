import React from 'react';

const TextInput = ({ id, label, placeholder, currentAnswer, onAnswerChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onAnswerChange(value);
  };

  return (
    <div className="text-input flex-1">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          id={id}
          className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          value={currentAnswer || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
