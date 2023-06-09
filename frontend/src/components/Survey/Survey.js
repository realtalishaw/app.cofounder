import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from './Sidebar';

const Survey = () => {
  const [activeSection, setActiveSection] = useState(0);
  const methods = useForm();
  const [errorSections, setErrorSections] = useState([]);



  // logic for handling local storage

  return (
    <div className="survey-container">
      <div className="survey-sidebar">
        <Sidebar
          formMethods={methods}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          errorSections={errorSections}
          setErrorSections={setErrorSections}
        />

      </div>
    </div>
  );
};

export default Survey;

