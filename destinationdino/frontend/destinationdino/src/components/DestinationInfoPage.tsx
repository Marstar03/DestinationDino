import React, { useState, useEffect } from "react";
import BoxForDestinationInfo from "./BoxForDestinationInfo";
import { getRequest } from "../httpMethods/getRequest";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useParams } from "react-router-dom";
import BoxForDestinationReviews from "./BoxForDestinationReviews";
import { ReviewProps } from "./ReviewBox";
import {
  GlobalStyle,
  GridContainer,
  Picture,
  Heading,
  Title,
  Score,
  Rating,
  Check,
  Description,
  Attraction,
} from "./DestinationInfoPageCSS";
import CustomCheckbox from "./CheckBox";
import Weather, { WeatherProps } from "./Weather";

const DestinationInfoPage: React.FC = () => {
  const { name } = useParams();
  const [reviews, setReviews] = useState<ReviewProps[]>([]); // Add this line
  const apiUrl = `http://localhost:8080/destinationInfo?id=${encodeURIComponent(
    name as string
  )}`;
  const { data, loading, error } = getRequest(apiUrl);
  //console.log(name);
  const [avgRating, setAvgRating] = useState<number>(0);

  useEffect(() => {
    fetch(`http://localhost:8080/hasVisited/destination?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        const reviews = data
          .filter((hasVisited: any) => hasVisited.rating !== -1)
          .map((hasVisited: any) => ({
            username: hasVisited.user.username,
            rating: hasVisited.rating,
            review: hasVisited.review,
          }));
        setReviews(reviews);
        // Compute the average rating
        const totalRating = reviews.reduce(
          (total: number, review: ReviewProps) =>
            review.rating != -1 ? total + review.rating : total,
          0
        );
        const avgRating = parseFloat((totalRating / reviews.length).toFixed(1));
        setAvgRating(avgRating);
      })
      .catch((error) => console.error("Error:", error));
  }, [data]);

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>Error!</div>;
  }

  const weatherDest: WeatherProps = {
    destination: name || "Trondheim"
  };

  return (
    <div>
      <GlobalStyle />
      <GridContainer>
        {data && <Picture $picture_url={data.picture} />}
        <Heading>
          <Title>
            {data && (
              <BoxForDestinationInfo
                title="Destination"
                content={`${data.name}, ${data.country}`}
              />
            )}
          </Title>
          <Score>
            <Rating>
              {data && (
                <BoxForDestinationInfo
                  title="Rating"
                  content={`${avgRating}/5`}
                />
              )}
            </Rating>
            <Check>
              <CustomCheckbox destinationId={name as string} />
            </Check>
          </Score>
        </Heading>
        <Description>
          {data && (
            <BoxForDestinationInfo
              title="Short Description"
              content={data.info}
            />
          )}
        </Description>
        <Weather {...weatherDest}/>
        <Attraction>
          {data && (
            <BoxForDestinationReviews
              title="Reviews"
              name={data.name}
              reviews={reviews}
            />
          )}
        </Attraction>
      </GridContainer>
    </div>
  );
};

export default DestinationInfoPage;
