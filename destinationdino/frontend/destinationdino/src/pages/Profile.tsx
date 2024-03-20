import React, { useState, useEffect } from "react";
import UserProfile, { UserProfileProps } from "../components/UserProfile";
import Button from "../components/LogoutButton";
import { ReviewProps } from "../components/ProfileReviewBox";
import BoxForProfileReviews from "../components/BoxForProfileReviews";
import {
  Attraction,
  GridContainer,
} from "../components/DestinationInfoPageCSS";

//import profilePicture from "../assets/TravellingDino.jpg";

/* async function fetchData() {
  const apiUrl = `http://localhost:8080/currentUser`;

  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Process the fetched data
  } catch (error) {
      console.error('Error fetching data:', error);
  }
} */

const Profile: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserProfileProps | null>(null);
  const [reviews, setReviews] = useState<ReviewProps[]>([]); // Add this line

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `http://localhost:8080/currentUser`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const userData = await response.json();
        setCurrentUser(userData);

        // Fetch reviews after currentUser is set
        const reviewsResponse = await fetch(
          `http://localhost:8080/hasVisited/user?username=${userData.username}`
        );
        const reviewsData = await reviewsResponse.json();
        const reviews = reviewsData
          .filter((hasVisited: any) => hasVisited.rating !== -1)
          .map((hasVisited: any) => ({
            destinationId: hasVisited.destination.name,
            rating: hasVisited.rating,
            review: hasVisited.review,
          }));
        setReviews(reviews);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  if (!currentUser) {
    return <div>You are not logged in</div>; // Render loading state while waiting for data
  }
  console.log(currentUser);
  console.log(currentUser?.admin);

  return (
    <div>
      <h1>Profile</h1>
      <GridContainer>
        <UserProfile {...currentUser} />
        <Button />
        <Attraction>
          <BoxForProfileReviews title="Reviews" reviews={reviews} />
        </Attraction>
      </GridContainer>
    </div>
  );
};

export default Profile;
