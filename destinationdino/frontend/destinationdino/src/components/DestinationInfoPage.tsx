import React from "react";
import BoxForDestinationInfo from "./BoxForDestinationInfo";
import { getRequest } from "../httpMethods/getRequest";
import { useParams } from "react-router-dom";
import CustomCheckbox from "./CheckBox";
import { useEffect, useState } from "react";
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
import { UserProfileProps } from "./UserProfile";

const DestinationInfoPage: React.FC = () => {
  const { name } = useParams();
  const apiUrl = `http://localhost:8080/destinationInfo?id=${encodeURIComponent(
    name as string
  )}`;

  const { data, loading, error } = getRequest(apiUrl);
  if (!data) {
    // Loading state
    if (loading) {
      return <div>Loading...</div>;
    }

    // Error state
    if (error) {
      return <div>Error!</div>;
    }
  }

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
              {data && <BoxForDestinationInfo title="Rating" content="3.5" />}
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
        <Attraction>
          {data && (
            <BoxForDestinationInfo
              title="Review"
              content="Review Function Coming Soon"
            />
          )}
        </Attraction>
      </GridContainer>
    </div>
  );
};

export default DestinationInfoPage;
