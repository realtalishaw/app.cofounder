//import axios from 'axios';

const API_BASE_URL = 'http://app.findacofounder.online/api/survey';

// Fetch saved answers for the current user
/*export const getSavedAnswers = async () => {
  console.log("Get Saved Anserts was called!")
  try {
  const token = localStorage.getItem('token');
  if (!token) {
  throw new Error('Token not found');
  }
  const response = await axios.get(`${API_BASE_URL}/get-answers`, {
  headers: {
  Authorization: `Bearer ${token}`,
  },
  });
  return response.data;
  } catch (error) {
  console.error('Error fetching saved answers:', error);
  throw error;
  }
  };*/
  export const getSavedAnswers = async () => {
    console.log("Get Saved Anserts was called!");
    try {
      let savedAnswers = JSON.parse(localStorage.getItem("savedAnswers"));
      if (!savedAnswers) {
        savedAnswers = {};
        localStorage.setItem("savedAnswers", JSON.stringify(savedAnswers));
      }
      return savedAnswers;
    } catch (error) {
      console.error("Error fetching saved answers:", error);
      throw error;
    }
  };
  
  

// Save or update an answer for the current user
/*export const saveAnswer = async (answer) => {
  try {
  const token = localStorage.getItem('authToken');
  const response = await axios.post(`${API_BASE_URL}/save-answers`, answer, {
  headers: {
  Authorization: `Bearer ${token}`
  }
  });
  return response.data;
  } catch (error) {
  console.error('Error saving answer:', error);
  throw error;
  }
  };*/
// Save or update an answer for the current user
export const saveAnswer = async (answer) => {
  try {
    const savedAnswers = JSON.parse(localStorage.getItem('savedAnswers'));
    savedAnswers[answer.questionId] = answer.answer;
    localStorage.setItem('savedAnswers', JSON.stringify(savedAnswers));
  } catch (error) {
    console.error('Error saving answer:', error);
    throw error;
  }
};

  
export async function submitSurvey(userId, answers) {
    const response = await fetch(`${API_BASE_URL}/submit-survey`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ userId, answers }),
    });
  
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  
    return response.json();
  }
  