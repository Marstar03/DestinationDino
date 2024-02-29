import React, { useState, useEffect } from 'react';
import BoxForDestinationInfo from './BoxForDestinationInfo';
import { getRequest } from '../httpMethods/getRequest';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useParams } from 'react-router-dom';



const DestinationInfoPage: React.FC = () => {
  
  const { name } = useParams();
  const apiUrl = `http://localhost:8080/destinationInfo?id=${encodeURIComponent(name)}`;
  const { data, loading, error } = getRequest(apiUrl);
  console.log(name);
  
  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>Error!</div>;
  }

  //Front-end
  const GlobalStyle = createGlobalStyle`
    body {
      color: black;
    }
  `;

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 100vh;
    grid-template-rows: auto auto auto;
    grid-gap: 10px;
  `;

  const Picture = styled.div`
    background: url(${props => props.pictureUrl}) no-repeat center center;
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
    background-color: #D9E5FF;

  `;

  const Description = styled.div`
    background-color: #F2F2F2;
    padding: 15px;
    text-align: center;
  `;

  const Attraction = styled.div`
    background-color: #E9E9E9;
    padding: 15px;
    text-align: center;
  `;

  return (
    <div>
      <GlobalStyle />
      <GridContainer>
        {data && <Picture pictureUrl={data.picture} />}
        <Heading>
          <Title>
            {data && (
            <BoxForDestinationInfo title="Destination" content={`${data.name}, ${data.country}`} />
            )}
          </Title>
          <Score>
          {data && (
          <BoxForDestinationInfo title="Rating" content="3.5" />
          )}
          </Score>
        </Heading>
        <Description>
          {data && (
          <BoxForDestinationInfo title="Short Description" content={data.info} />
          )}
        </Description>
        <Attraction>
          {data && (
          <BoxForDestinationInfo title="Review" content="Review Function Coming Soon" />
          )}
        </Attraction>
        
      </GridContainer>

      
    </div>
  );
};

export default DestinationInfoPage;
