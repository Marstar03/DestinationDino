import { useState, useEffect } from 'react';

export function getRequest(apiUrl: string) {
    interface Data {
        info: string;
        name: string;
        country: string;
        picture: string;
      }
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [apiUrl]);

    return { data, loading, error };
}
