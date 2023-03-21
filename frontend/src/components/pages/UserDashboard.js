import React, { useState, useEffect } from 'react';
import jwtDecode from 'jsonwebtoken/decode';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        const { userId } = jwtDecode(token);

        try {
          // Fetch user-specific data from the backend using the userId
          const response = await fetch(`/api/user-data/${userId}`);
          const data = await response.json();

          // Update the userData state with the fetched data
          setUserData(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      {userData && (
        <div>
          {/* Render user-specific data here */}
          <p>Name: {userData.name}</p>
          {/* Add more user data fields as needed */}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;