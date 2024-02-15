import React, { useState, useEffect } from 'react';

export default function About() {
    // Define the URL of the API endpoint
    const apiUrl = 'http://localhost:8080/users';

    // Define state variables to store the fetched data and loading/error status
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the API endpoint when the component mounts
    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
                // Check if the response is successful (status code in the range 200-299)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Parse the JSON response
                return response.json();
            })
            .then(data => {
                // Set the fetched data and update loading status
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                // Set the error and update loading status
                setError(error);
                setLoading(false);
            });
    }, [apiUrl]); // Execute effect only when apiUrl changes

    // Render loading state while fetching data
    if (loading) {
        return <div>Loading...</div>;
    }

    // Render fetched data JSON string
    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}