// src/Questions/MultipleSelection.js
import React from 'react';

const MultipleSelection = ({ id, label, options }) => {
  return (
    <div className="multiple-selection">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-2">
        {options.map((option, index) => (
          <div key={index} className="my-2">
            <input
              type="checkbox"
              id={`${id}-${index}`}
              name={id}
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

export default MultipleSelection;
