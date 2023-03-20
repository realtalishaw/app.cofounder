import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import NavigationButtons from './NavigationButtons';
import { sections } from './sections';



const MainContent = ({ activeSection, setActiveSection }) => {
  
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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




      const submitSurvey = () => {
        // Replace this with your actual submission logic
        return new Promise((resolve, reject) => {
          // Simulate a successful submission with a 1-second delay
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      };
      

      const handleNext = () => {
        const currentSectionQuestions = sections[currentSection].questions;
      
        if (currentQuestion < currentSectionQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          console.log("handleNext:", currentSection, currentQuestion);
        } else if (currentSection < sections.length - 1) {
          setCurrentSection((prevSection) => {
            const nextSection = prevSection + 1;
            setActiveSection(nextSection);
            setCurrentQuestion(0);
            return nextSection;
          });
        } else {
          // Survey completion logic
          submitSurvey()
            .then(() => {
              // Redirect to the congratulations page
              // Replace '/congratulations' with the actual path to the congratulations page
              console.log("Hey good looking")
            })
            .catch((error) => {
              console.error('Error submitting survey:', error);
            });
        }
      };
      
      



  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      console.log("handleBack:", currentSection, currentQuestion);

    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setActiveSection(currentSection - 1); // Add this line
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
          <div className='flex flex-col pt-32 items-center'>
            {SectionComponent && <SectionComponent currentQuestion={currentQuestion} questions={sections[currentSection].questions} />}


          </div>
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
