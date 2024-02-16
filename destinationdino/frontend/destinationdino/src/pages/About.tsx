import React, { useState } from 'react';
import { postRequest } from '../httpMethods/postRequest';

export default function AddUserForm() {
    const apiUrl = 'http://localhost:8080/users';
    const { postData, data, loading, error } = postRequest(apiUrl);
    const [userDataJson, setUserDataJson] = useState('');

    const handleInputChange = (e: any) => {
        setUserDataJson(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        try {
            const userData = JSON.parse(userDataJson); // Parse the JSON input into an object
            postData(userData); // Call postData function with user data to send the POST request
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Add New User (JSON Input)</h2>
            <form onSubmit={handleSubmit}>
                <textarea value={userDataJson} onChange={handleInputChange} />
                <br />
                <button type="submit">Add User</button>
            </form>
            {data && <div>User added successfully: {JSON.stringify(data)}</div>}
        </div>
    );
}

