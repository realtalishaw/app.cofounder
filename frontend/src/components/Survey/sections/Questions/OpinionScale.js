import React from 'react';

const OpinionScale = ({
  id,
  label,
  scaleMin = 1,
  scaleMax = 5,
  labels = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
}) => {
  return (
    <div className="opinion-scale">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-2 flex justify-between">
        {Array.from({ length: scaleMax - scaleMin + 1 }, (_, i) => i + scaleMin).map((value) => (
          <div key={value} className="text-center">
            <input
              type="radio"
              id={`${id}-${value}`}
              name={id}
              value={value}
              className="text-indigo-600 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label htmlFor={`${id}-${value}`} className="block text-sm text-gray-700 cursor-pointer">
              {labels ? labels[value - 1] : value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpinionScale;
