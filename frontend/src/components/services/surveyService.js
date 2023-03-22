import axios from 'axios';

const API_URL = 'https://api.findacofounder.online/survey';

export async function submitSurvey (formData) {
  try {
    const response = await axios.post(`${API_URL}/submit`, { answers: formData }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      console.log('Survey answers submitted successfully, yay!');
    } else {
      console.log('Error submitting survey answers');
    }
  }catch (error) {
    console.error('Error submitting survey answers:', error.response.data);
  }
  
};


// save answers
export async function saveSurvey(formData) {
  try {
    const response = await axios.post(`${API_URL}/submit`, {answers: formData }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      console.log('Survey answers submitted successfully, yay!');
    } else {
      console.log('Error submitting survey answers');
    }
  } catch (error) {
    console.error('Error submitting survey answers:', error.response.data);
  }
}

export async function getSurveyAnswers() {
  try {
    const response = await axios.get(`${API_URL}/answers`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      return response.data.surveyAnswer;
    }
  } catch (error) {
    console.error('Error fetching survey answers:', error.response.data);
  }
}
