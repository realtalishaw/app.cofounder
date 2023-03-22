import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import NavigationButtons from './NavigationButtons';
import { sections } from './sections';
import { useNavigate } from 'react-router-dom';
import { saveSurvey, getSurveyAnswers } from '../services/surveyService';


const MainContent = ({ activeSection, setActiveSection, formMethods, onSubmit, errorSections, setErrorSections }) => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');


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
      const handleNext = async () => {
        // Save the survey data before moving to the next question
        const formData = formMethods.getValues();
        await saveSurvey(formData);
      
        const currentSectionQuestions = sections[currentSection].questions;
        if (currentQuestion < currentSectionQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else if (currentSection < sections.length - 1) {
          setCurrentSection(currentSection + 1);
          setActiveSection(currentSection + 1);
          setCurrentQuestion(0);
        } else {
          if (totalAnsweredQuestions === totalQuestions) {
            onSubmit();
            navigate('/thank-you'); // Navigate to the thank-you page
          } else {
            setErrorMessage('Please complete all questions');
      
            const incompleteSections = [];
            sections.forEach((section, index) => {
              if (!section.questions.every(question => {
                const value = formMethods.getValues()[question.name];
                return value !== undefined;
              })) {
                incompleteSections.push(index);
              }
            });
            setErrorSections(incompleteSections);
            console.log("Error Sections:", incompleteSections)
          }
        }
      };
      ;

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
  
  const { setValue } = formMethods;
  

  useEffect(() => {
    const fetchSurveyAnswers = async () => {
      const surveyAnswer = await getSurveyAnswers();
      if (surveyAnswer) {
        const { answers } = surveyAnswer;
        for (const key in answers) {
          if (Object.hasOwnProperty.call(answers, key)) {
            setValue(key, answers[key]);
          }
        }
      }
    };
  
    fetchSurveyAnswers();
  }, [setValue]);
  ;
  

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
    errorMessage={errorMessage}
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
             {errorMessage && <div className="error-message text-red-600 py-3 font-bold text-lg">{errorMessage}</div>}
          </div>
         
        </div>
      )}
    </>
  );
};

export default MainContent;
