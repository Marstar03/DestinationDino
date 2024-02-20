import React, { useState, useEffect } from 'react';
import BoxForDestinationInfo from './BoxForDestinationInfo';
import { fetchData } from '../httpMethods/fetchData';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const DestinationInfoPage: React.FC = () => {
  const [data, setData] = useState(null); // Holds the destinations data
  const [loading, setLoading] = useState(true); // Tracks the loading state
  const [error, setError] = useState(null); // Tracks the error state

  // This function fetches data from the API.
  // Adjust the URL or parameters as needed based on your API.
  const fetchData = async () => {
    const apiUrl = `http://localhost:8080/destinations`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data); // Update the state with the fetched data
      setLoading(false); // Set loading to false as data has been loaded
    } catch (error: any) {
      console.error('Error fetching data:', error);
      setError(error);
      setLoading(false); // Ensure loading is set to false even if there's an error
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs only once after the initial render


  //Front-end
  const GlobalStyle = createGlobalStyle`
    body {
      color: black;
    }
  `;

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    max-width: window.innerWidth - 20px;
    margin: 0 auto;
  `;

  const Picture = styled.div`
    background: url('https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center center;
    background-size: cover;
    height: 400px;
  `;

  const Heading = styled.div`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  `;

  const Title = styled.div`
    background-color: #F2F2F2;
    padding: 15px;
    text-align: center;
  `;

  const Score = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #D9E5FF;
    font-size: 2em;
  `;

  const Description = styled.div`
    background-color: #F2F2F2;
    padding: 15px;
    text-align: center;
  `;

  const Attractions = styled.div`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  `;

  const Attraction = styled.div`
    background-color: #E9E9E9;
    padding: 15px;
    text-align: center;
  `;
  // Example: Displaying the first destination's details
  const firstDestination = data[7]; // Adjust this as needed

  return (
    <div>
      <GlobalStyle />
      <GridContainer>
        <Picture style={{ backgroundImage: `url(${firstDestination.picture || 'defaultImageURL'})` }} />
        <Heading>
          <Title>{firstDestination.name || 'Destination Name'}</Title>
          <Score>{firstDestination.score || 'N/A'}</Score>
        </Heading>
        <Description>{firstDestination.info || 'No description available'}</Description>
        {/* You might need to adjust how attractions are displayed based on your data structure */}
        <Attractions>
          <Attraction>Attraksjoner</Attraction>
          <Attraction>Review</Attraction>
        </Attractions>
      </GridContainer>
    </div>
  );
};
//   return (
//     <div>
//       <GlobalStyle />
//       <GridContainer>
//         <Picture />
//         <Heading>
//           <Title>Los Angeles</Title>
//           <Score>8.3</Score>
//         </Heading>
//         <Description>Beskrivelse</Description>
//         <Attractions>
//           <Attraction>Attraksjoner</Attraction>
//           <Attraction>Review</Attraction>
//         </Attractions>
//       </GridContainer>

//       {data && data.map((destination: any, index: number) => (
//         <BoxForDestinationInfo key={index} title={destination.name} content={JSON.stringify(destination.country)} />
//       ))}

//       {/* {data && (
//         <BoxForDestinationInfo title="Short Description" content={data ? JSON.stringify(data) : "N/A"} />
//       )}

//       <h3>Data: {JSON.stringify(data)}</h3> */}
//     </div>
//   );
// };

export default DestinationInfoPage;
