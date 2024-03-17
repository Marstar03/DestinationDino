import React, { useState, useEffect } from 'react';
import BoxForDestinationInfo from './BoxForDestinationInfo';
import { getRequest } from '../httpMethods/getRequest';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useParams } from 'react-router-dom';
import BoxForDestinationReviews from './BoxForDestinationReviews';
import { ReviewProps } from './ReviewBox';



const DestinationInfoPage: React.FC = () => {
  
  const { name } = useParams();
  const [reviews, setReviews] = useState<ReviewProps[]>([]); // Add this line
  const apiUrl = `http://localhost:8080/destinationInfo?id=${encodeURIComponent(name)}`;
  const { data, loading, error } = getRequest(apiUrl);
  //console.log(name);
  const [avgRating, setAvgRating] = useState<number>(0);

  useEffect(() => {
    fetch(`http://localhost:8080/hasVisited/destination?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const reviews = data.map((hasVisited: any) => ({
                username: hasVisited.user.username,
                rating: hasVisited.rating,
                review: hasVisited.review
            }));
            setReviews(reviews);
            // Compute the average rating
            const totalRating = reviews.reduce((total: number, review: ReviewProps) => total + review.rating, 0);
            const avgRating = parseFloat((totalRating / reviews.length).toFixed(1));
            setAvgRating(avgRating);
        })
        .catch(error => console.error('Error:', error));
  }, [data]);

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
          <BoxForDestinationInfo title="Rating" content={`${avgRating}/5`} />
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
          <BoxForDestinationReviews title="Reviews" name={data.name} reviews={reviews}/>
          )}
        </Attraction>
        
      </GridContainer>

      
    </div>
  );
};

export default DestinationInfoPage;
