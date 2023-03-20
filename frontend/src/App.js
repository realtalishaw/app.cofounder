import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/Login';
import Survey from './components/Survey/Survey';
import ProtectedRoute from './ProtectedRoute';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(storedAuth === 'true');
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} component={Survey} />} path="/co-founder-survey" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;