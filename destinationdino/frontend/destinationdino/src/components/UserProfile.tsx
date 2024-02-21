import React from 'react';
import TextField from './TextField';
import ProfilePicture1 from '../assets/ProfilePicture1.jpg';
import ProfilePicture2 from '../assets/ProfilePicture2.jpg';
import ProfilePicture3 from '../assets/ProfilePicture3.jpg';
import ProfilePicture4 from '../assets/ProfilePicture4.jpg';
import ProfilePicture5 from '../assets/ProfilePicture5.jpg';

export interface UserProfileProps {
  username: string;
  password: string;
  email: string;
  profilePicture: number;
  admin: boolean;
}

const pictures = [
  { id: 0, src: ProfilePicture1, alt: 'Picture 1' },
  { id: 1, src: ProfilePicture2, alt: 'Picture 2' },
  { id: 2, src: ProfilePicture3, alt: 'Picture 3' },
  { id: 3, src: ProfilePicture4, alt: 'Picture 4' },
  { id: 4, src: ProfilePicture5, alt: 'Picture 5' },
];

const UserProfile: React.FC<UserProfileProps> = ({ username, email, profilePicture }) => {
  const picture = pictures.find(picture => picture.id === profilePicture);
  return (
    <div className="user-profile-container" style={{ position: 'absolute', top: 100, left: 100 }}>
      <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {picture && (
        <img
          src={picture.src}
          alt="Profile Picture"
          style={{
            width: '100px',
            height: '100px',
            border: '2px solid #000', // Add a 2px solid black border
            borderRadius: '50%', // Optional: Add border radius to make it circular
          }}
        />
        )}
        <div className="user-profile-info">
          <TextField label="Username" defaultValue={username}/>
          <TextField label="Email" defaultValue={email}/>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
