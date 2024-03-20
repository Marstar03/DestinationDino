import React, { useEffect, useState } from 'react';
import ReviewGrid from './ReviewGrid';
import { ReviewProps } from './ReviewBox';
import { Link } from 'react-router-dom';

export interface BoxProps {
  title: string;
  name: string;
  reviews: ReviewProps[];
}

const BoxForDestinationInfo: React.FC<BoxProps> = ({ title, name, reviews }) => {
  //const [reviews, setReviews] = useState<ReviewProps[]>([]);
    /* const reviews: ReviewProps[] = [
        {
          username: 'User1',
          rating: 4,
          review: 'Great experiencehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh!',
        },
        {
          username: 'User2',
          rating: 5,
          review: 'Excellent service!',
        },
      ]; */

    //const [hasVisiteds, setHasVisiteds] = useState([]); // State to store the fetched HasVisited entities

    /* useEffect(() => {
        console.log("Navn: ", name);
        fetch(`http://localhost:8080/hasVisited/destination?name=${name}`)
            //.then(response => response.json())
            .then(response => {
              console.log(response); // Log the response
              return response.json();
            })
            .then(data => {
              const reviews = data.map((hasVisited: any) => ({
                  username: hasVisited.user.username, // Assuming 'user' is an object with a 'username' property
                  rating: hasVisited.rating,
                  review: hasVisited.review
              }));
              setReviews(reviews);
            })
            .catch(error => console.error('Error:', error));
    }, [name]); */
      
    return (
        <div>
            <h2>{title}</h2>
            <button className='review-button'>
              <Link to={`/ReviewPage/${encodeURIComponent(name.trim())}`}>Add Review</Link>
            </button>
            <ReviewGrid reviews={reviews} />
        </div>
    );
};

export default BoxForDestinationInfo;