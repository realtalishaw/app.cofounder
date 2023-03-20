import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="p-6">
    <div className="progress-container w-full bg-gray-300 h-5 rounded-full">
      <div
        className="progress-bar bg-indigo-600 h-full rounded-full flex items-center justify-center text-white text-s  "
        style={{ width: `${progress}%` }}
      >
        {Math.round(progress)}%
      </div>
    </div>
    </div>
  );
};

export default ProgressBar;

