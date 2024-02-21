import { useState } from 'react';

export function postRequest(apiUrl: any) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (requestData: any) => {
        setLoading(true);
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = await response.json();
            setData(responseData);
            setLoading(false);
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    };
    return { postData, data, loading, error };
}
