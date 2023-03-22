import React, { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const [explode, setExplode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setExplode(true);
  }, []);

  const onGoToDashboard = () => {
   navigate('/dashboard');
  };

  return (
    <div className="relative flex flex-col h-screen justify-center items-center">
      {explode && (
        <ConfettiExplosion
          force={0.5}
          duration={5000}
          particleCount={200}
          floorHeight={window.innerHeight}
          floorWidth={window.innerWidth}
        />
      )}
      <h1 className="z-10 text-4xl font-bold text-center">Congratulations 🥳</h1>
      <h2 className="z-10 text-2xl font-medium text-center mt-4">
        You've completed the co-founder matching survey!
      </h2>
      <button
        className="z-10 bg-indigo-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={onGoToDashboard}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default ThankYouPage;
