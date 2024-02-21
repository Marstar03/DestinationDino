import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { buttonGetRequest } from '../httpMethods/buttonGetRequest';

const LogoutButton: React.FC = () => {
    const apiUrl = 'http://localhost:8080/logout';
    const handleLogout = async () => {
        try {
            const { data: loggedOut, loading, error } = await buttonGetRequest(apiUrl);
            if (loading) {
                console.log('Loading...');
            } else if (error) {
                console.error('Error logging out:', error);
            } else {
                console.log('Logged out', loggedOut);
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <Link to='/'>
            <Button variant="outlined" onClick={handleLogout}>Log Out</Button>
        </Link>
    );
};

export default LogoutButton;

