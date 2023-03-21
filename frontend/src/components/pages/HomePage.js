import React, { useState } from 'react';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPasswordValidation, setShowPasswordValidation] = useState(false);
  
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await registerUser(email, password);
        console.log(response);
        navigate('/co-founder-survey');
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
      }
    };
    
    
  
    const passwordValidation = {
      lowerCase: /[a-z]/.test(password),
      upperCase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      minLength: password.length >= 8,
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded shadow-lg w-full md:w-1/3">
          <h1 className="text-4xl font-bold mb-4 text-center">
            <span role="img" aria-label="Rocket">
              🚀
            </span>{' '}
            Find a Co-Founder
          </h1>
          <h2 className="font-bold text-xl mb-4 text-center">Join the revolution of co-founding startups!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setShowPasswordValidation(true)}
              onBlur={() => setShowPasswordValidation(false)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            {showPasswordValidation ? (
              <div className="flex flex-wrap justify-between mb-4">
                <div className={passwordValidation.lowerCase ? 'text-green-500' : 'text-red-500'}>
                  {passwordValidation.lowerCase ? '✔' : '✘'} Contains a lowercase letter
                </div>
                <div className={passwordValidation.upperCase ? 'text-green-500' : 'text-red-500'}>
                  {passwordValidation.upperCase ? '✔' : '✘'} Contains an uppercase letter
                </div>
                <div className={passwordValidation.number ? 'text-green-500' : 'text-red-500'}>
                  {passwordValidation.number ? '✔' : '✘'} Contains a number
                </div>
                <div className={passwordValidation.minLength ? 'text-green-500' : 'text-red-500'}>
                  {passwordValidation.minLength ? '✔' : '✘'} Minimum 8 characters
                </div>
              </div>
            ) : null}
            <button type="submit" className="w-full py-2 px-4 font-bold text-white bg-blue-500 rounded">
              Submit
            </button>
          </form>
          {errorMessage && <div className="text-red-500 font-bold py-2 px-4">{errorMessage}</div>}
          <div className="py-2 px-4 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:text-blue-700">
              Login
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;