import React, { useState } from 'react';
import { loginUser } from '../services/authService';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);
      console.log(response);
      alert(response.message);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error during login.');
    }
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
        <h2 className="text-xl font-bold mb-4 text-center">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 mb-4 text-base border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 mb-4 text-base border border-gray-300 rounded-md"
          />
  
          <button
            type="submit"
            className="w-full py-2 px-4 text-white font-bold bg-blue-500 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
        {errorMessage && (
          <div className="text-red-600 font-bold py-2 px-4">{errorMessage}</div>
        )}
        <div className="text-center mt-4">
          Need an account?{' '}
          <a href="/" className="text-blue-500 hover:text-blue-700">
            Register
          </a>
        </div>
      </div>
    </div>
  );
  
}

export default LoginPage;
