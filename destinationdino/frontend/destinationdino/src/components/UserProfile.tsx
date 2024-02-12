import React from 'react';
import TextField from './TextField';

export interface UserProfileProps {
  profilePicture: string;
  username: string;
  email: string;
  // Add more user information props as needed
}

const UserProfile: React.FC<UserProfileProps> = ({ username, email, profilePicture }) => {
  return (
    <div className="user-profile-container" style={{ position: 'absolute', top: 100, left: 100 }}>
      <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img src={profilePicture} alt={username} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
        <div className="user-profile-info">
          <TextField label="Username" defaultValue={username}/>
          <TextField label="Email" defaultValue={email}/>
          {/* Add more user information elements here */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
