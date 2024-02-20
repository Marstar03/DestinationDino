// import { useState, useEffect } from 'react';

// export function getRequest(apiUrl: any) {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

//         fetch(apiUrl)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setData(data);
//                 setLoading(false); // Set loading to false when data is fetched successfully
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false); // Set loading to false when an error occurs
//             });
//     }, [apiUrl]); // Execute effect only when apiUrl changes

//     return { data, loading, error };
// }

// getRequest should be a simple function returning a promise
export function getRequest(apiUrl: string) {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
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
