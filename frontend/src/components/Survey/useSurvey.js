import { useState, useEffect } from 'react';
import { getSavedAnswers, saveAnswer, submitSurvey as submit } from '../services/answerService';
import jwtDecode from 'jsonwebtoken/decode';


const useSurvey = (sections) => {
  const [savedAnswers, setSavedAnswers] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const fetchSavedAnswers = async () => {
      const answers = await getSavedAnswers();
      console.log("getSavedAnswers response:", answers)
      setSavedAnswers(answers);
    };

    fetchSavedAnswers();
  }, []);

  const updateAnswer = async (answer) => {
    try {
      await saveAnswer(answer);
      console.log('Answer:', answer);
      setSavedAnswers((prevAnswers) => {
        const updatedAnswers = { ...prevAnswers };
        updatedAnswers[answer.questionId] = answer;
        return updatedAnswers;
      
      });
    } catch (error) {
      console.error('Error updating answer:', error);
    }
  };
  

  const submitSurvey = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      return;
    }
  
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id; // Replace 'id' with the appropriate key for the user ID in your JWT payload
  
    const totalQuestions = sections.reduce((acc, section) => acc + section.questions.length, 0);
    const allAnswered = Object.keys(savedAnswers).length === totalQuestions;
  
    if (!allAnswered) {
      alert('Please answer all questions before submitting the survey.');
      return;
    }
  
    try {
      const response = await submit(userId, savedAnswers);
  
      if (response.success) {
        // Clear local storage for the survey answers
        setSavedAnswers({});
      }
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  return {
    savedAnswers,
    currentSection,
    setCurrentSection,
    currentQuestion,
    setCurrentQuestion,
    updateAnswer,
    submitSurvey
  };
};

export default useSurvey;
