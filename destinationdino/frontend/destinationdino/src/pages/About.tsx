export default function About() {
    // Define the URL of the API endpoint
const apiUrl = 'https://example.com/api/data';

// Fetch data from the API endpoint
fetch(apiUrl)
    .then(response => {
        // Check if the response is successful (status code in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response
        return response.json();
    })
    .then((data: any) => {
        // Handle the JSON data
        console.log('Data:', data);
        // You can now use the 'data' object with the expected structure defined by the 'MyData' interface
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
    });


  return (
    <div>data</div>
  );
}