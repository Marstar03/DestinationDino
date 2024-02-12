import React from 'react';
import UserProfile, { UserProfileProps } from '../components/UserProfile';
import profilePicture from "../assets/TravellingDino.jpg";

const Profile: React.FC = () => {
  // Mock user data
  const userData: UserProfileProps = {
    profilePicture: profilePicture,
    username: 'John Doe',
    email: 'john.doe@example.com',
    // Add more user information as needed
  };

  return (
    <div>
      <h1>Profile</h1>
      <UserProfile {...userData} />
    </div>
  );
};

export default Profile;
