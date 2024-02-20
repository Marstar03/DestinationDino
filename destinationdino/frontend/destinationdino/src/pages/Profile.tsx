import React, { useState, useEffect } from 'react';
import UserProfile, { UserProfileProps } from '../components/UserProfile';
//import profilePicture from "../assets/TravellingDino.jpg";

/* async function fetchData() {
  const apiUrl = `http://localhost:8080/currentUser`;

  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Process the fetched data
  } catch (error) {
      console.error('Error fetching data:', error);
  }
} */


const Profile: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserProfileProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `http://localhost:8080/currentUser`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const userData = await response.json();
        setCurrentUser(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  if (!currentUser) {
    return <div>Loading...</div>; // Render loading state while waiting for data
  }

  return (
    <div>
      <h1>Profile</h1>
      <UserProfile {...currentUser} />
    </div>
  );
};

export default Profile;
