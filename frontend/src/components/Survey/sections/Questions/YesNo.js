// src/Questions/YesNo.js
import React, { useState } from 'react';

const YesNo = ({ id, label }) => {
  const [selected, setSelected] = useState('');

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  return (
    <div className="yes-no">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 flex space-x-4">
        <button
          type="button"
          className={`${
            selected === 'yes' ? 'bg-indigo-500 text-white' : 'bg-gray-200'
          } text-sm px-4 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
          onClick={() => handleOptionClick('yes')}
        >
          Yes
        </button>
        <button
          type="button"
          className={`${
            selected === 'no' ? 'bg-indigo-500 text-white' : 'bg-gray-200'
          } text-sm px-4 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500`}
          onClick={() => handleOptionClick('no')}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default YesNo;
