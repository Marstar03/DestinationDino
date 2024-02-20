export function fetchData(apiUrl: any) {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                // If the server response was not ok (e.g., 404, 500, etc.), throw an error with the status
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the JSON from the response
        })
        .catch(error => {
            // Handle or throw the error if something went wrong during the fetch
            console.error("Fetch error:", error);
            throw error;
        });
}

