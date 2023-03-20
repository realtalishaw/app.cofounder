import React, { useState } from 'react';
import Sidebar from './Sidebar';


const Survey = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="survey-container">
      <div className="survey-sidebar">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  );
};

export default Survey;
