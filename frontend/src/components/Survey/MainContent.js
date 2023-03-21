import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import NavigationButtons from './NavigationButtons';
import { sections } from './sections';
import { useNavigate } from 'react-router-dom';
import useSurvey from './useSurvey';

const MainContent = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();
  const {
    savedAnswers,
    currentSection,
    setCurrentSection,
    currentQuestion,
    setCurrentQuestion,
    updateAnswer,
    submitSurvey
  } = useSurvey(sections);
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  const totalQuestions = sections.reduce((acc, section) => acc + section.questions.length, 0);
  const progress =
    totalQuestions > 0
      ? ((currentSection * sections[currentSection].questions.length + currentQuestion) / totalQuestions) * 100
      : 0;

      const handleNext = () => {
        const currentSectionQuestions = sections[currentSection].questions;
        const currentQuestionId = sections[currentSection].questions[currentQuestion].id;
        const currentAnswer = savedAnswers[currentQuestionId]?.answer;
      
        if (currentAnswer !== undefined) {
          updateAnswer({
            questionId: currentQuestionId,
            answer: currentAnswer,
          });
        }
      
        if (currentQuestion < currentSectionQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else if (currentSection < sections.length - 1) {
          setCurrentSection((prevSection) => {
            const nextSection = prevSection + 1;
            setActiveSection(nextSection);
            setCurrentQuestion(0);
            return nextSection;
          });
        } else {
          submitSurvey()
            .then(() => {
              navigate('/thank-you');
            })
            .catch((error) => {
              console.error('Error submitting survey:', error);
            });
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

  useEffect(() => {
    setCurrentSection(activeSection);
    setCurrentQuestion(0); // Reset the currentQuestion when the section changes
  }, [activeSection, setCurrentQuestion, setCurrentSection]);

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
          <div className='flex flex-col pt-32 items-center'>
            {SectionComponent && (
              <SectionComponent
                currentQuestion={currentQuestion}
                questions={sections[currentSection].questions}
                savedAnswers={savedAnswers}
                onSaveAnswer={updateAnswer}
              />
            
            )}



</div>
          <div className=" flex flex-col items-center justify-between pt-6">
            <NavigationButtons
              handleBack={handleBack}
              handleNext={handleNext}
              currentSection={currentSection}
              currentQuestion={currentQuestion}
              sections={sections}
              totalQuestions={totalQuestions}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MainContent;