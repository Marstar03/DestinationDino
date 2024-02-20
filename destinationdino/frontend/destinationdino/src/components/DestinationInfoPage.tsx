import React, { useState, useEffect } from 'react';
import BoxForDestinationInfo from './BoxForDestinationInfo';
import { fetchData } from '../httpMethods/fetchData';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


const DestinationInfoPage: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    // Assuming you have the destination ID from somewhere (state, props, URL parameters, etc.)
    // For demonstration, let's assume it's hardcoded. Replace with actual dynamic ID as needed.
    const destinationId = 'Paris';

    useEffect(() => {
        setLoading(true);
        // Update the URL to include the destination ID in the path
        const apiUrl = `http://localhost:8080/destinations/${destinationId}`;

        fetchData(apiUrl)
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, [destinationId]); // This effect depends on destinationId, it re-runs if destinationId changes

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

//Frontend
const GlobalStyle = createGlobalStyle`
body {
    color: black; /* This sets the text color to black for all text within the body */
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
  height: 400px; // Adjust as needed
`;

const Heading = styled.div`
  grid-column: 1 / -1; // Span across all columns
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const Title = styled.div`
    background-color: #F2F2F2; // Example color
    padding: 15px;
    text-align: center;
`;

const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px; // Adjust as needed
  background-color: #D9E5FF; // Example color
  font-size: 2em;
`;

const Description = styled.div`
  background-color: #F2F2F2; // Example color
  padding: 15px;
  text-align: center;
`;

const Attractions = styled.div`
  grid-column: 1 / -1; // Span across all columns
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const Attraction = styled.div`
  background-color: #E9E9E9; // Example color
  padding: 15px;
  text-align: center;
`;

    return (
        <div>
            <GlobalStyle />
            <GridContainer>
            <Picture />
            <Heading>
                <Title>Los Angelos</Title>
                <Score>8.3</Score>
            </Heading>
            <Description>Beskrivelse </Description>
            <Attractions>
                <Attraction>Attraksjoner</Attraction>
                <Attraction>Review</Attraction>
            </Attractions>
            </GridContainer>
  
            
            {data && (
                <BoxForDestinationInfo title="Short Description" content={data ? JSON.stringify(data) : "N/A"} />
            )}
            
            <h3>Data: {JSON.stringify(data)}</h3>
        </div>
    );
};

export default DestinationInfoPage;
