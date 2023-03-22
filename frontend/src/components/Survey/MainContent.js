import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import NavigationButtons from './NavigationButtons';
import { sections } from './sections';
import { useNavigate } from 'react-router-dom';

const MainContent = ({ activeSection, setActiveSection, formMethods, onSubmit }) => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();


  const calculateTotalQuestions = () => {
    let total = 0;
    for (let i = 0; i < sections.length; i++) {
      const componentQuestions = sections[i].questions;
      if (componentQuestions) {
        total += componentQuestions.length;
      }
    }
    return total;
  };

  const totalQuestions = calculateTotalQuestions();

  const calculateTotalAnsweredQuestions = () => {
    let totalAnsweredQuestions = 0;
    for (let i = 0; i < currentSection; i++) {
      totalAnsweredQuestions += sections[i].questions.length;
    }
    totalAnsweredQuestions += currentQuestion;
    return totalAnsweredQuestions;
  };

  const progress =
    totalQuestions > 0
      ? (calculateTotalAnsweredQuestions() / totalQuestions) * 100
      : 0;

      const handleNext = () => {
        const currentSectionQuestions = sections[currentSection].questions;
        if (currentQuestion < currentSectionQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else if (currentSection < sections.length - 1) {
          setCurrentSection(currentSection + 1);
          setActiveSection(currentSection + 1);
          setCurrentQuestion(0);
        } else {
          // Survey completion logic
          onSubmit();
          navigate('/thank-you'); // Navigate to the thank-you page
        }
      };


  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setActiveSection(currentSection - 1);
      setCurrentQuestion(sections[currentSection - 1].questions.length - 1);
    } else {
      // Beginning of the survey; handle this case if needed
    }
  };


  const startSurvey = () => {
    setShowWelcomePage(false);
  };

  const SectionComponent = sections[currentSection].component;
  const totalAnsweredQuestions = calculateTotalAnsweredQuestions();

  useEffect(() => {
    setCurrentSection(activeSection);
    setCurrentQuestion(0); // Reset the currentQuestion when the section changes
  }, [activeSection]);

  return (
    <>
      {showWelcomePage ? (
        <div className="survey-welcome flex flex-col h-screen justify-center items-center">
          <h1 className="welcome-title text-4xl font-bold text-center">Welcome to the Co-founder Survey!</h1>
          <h2 className="welcome-subtitle text-2xl font-medium text-center">Let's find your perfect co-founder.</h2>
          <button className="begin-button bg-indigo-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-8" onClick={startSurvey}>
            Begin
          </button>
        </div>
      ) : (
        <div className="survey-main">
          <ProgressBar progress={progress} />

          <form className='flex flex-col pt-32 items-center' onSubmit={formMethods.handleSubmit(onSubmit)}>
            {SectionComponent && (
              <SectionComponent
                formMethods={formMethods}
                currentQuestion={currentQuestion}
                questions={sections[currentSection].questions}
              />
            )}
          </form>


          <div className=" flex flex-col items-center justify-between pt-6">
            <NavigationButtons
              handleBack={handleBack}
              handleNext={handleNext}
              currentSection={currentSection}
              currentQuestion={currentQuestion}
              sections={sections}
              totalAnsweredQuestions={totalAnsweredQuestions}
              totalQuestions={totalQuestions}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MainContent;
