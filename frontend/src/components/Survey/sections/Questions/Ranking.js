// src/Questions/Ranking.js
import React, { useState, useEffect } from 'react';

const Ranking = ({ id, label, options }) => {
  const [rankings, setRankings] = useState(
    options.map((option) => ({ ...option, rank: 0 }))
  );
  const [hasError, setHasError] = useState(false);

  const handleRankChange = (event, index) => {
    const newRankings = [...rankings];
    newRankings[index].rank = parseInt(event.target.value);
    setRankings(newRankings);
  };

  useEffect(() => {
    const uniqueRanks = new Set(
      rankings.map((option) => option.rank).filter((rank) => rank !== 0)
    );
    setHasError(uniqueRanks.size !== rankings.filter((option) => option.rank !== 0).length);
  }, [rankings]);

  return (
    <div className="ranking">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-2">
        {rankings.map((option, index) => (
          <div key={option.id} className="flex items-center mb-2">
            <select
              value={option.rank}
              onChange={(event) => handleRankChange(event, index)}
              className={`border-2 rounded-md mr-2 ${
                hasError ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="0">Select rank</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <span>{option.label}</span>
          </div>
        ))}
      </div>
      {hasError && (
        <div className="text-red-500 text-sm">
          Please make sure each option has a unique rank.
        </div>
      )}
    </div>
  );
};

export default Ranking;
