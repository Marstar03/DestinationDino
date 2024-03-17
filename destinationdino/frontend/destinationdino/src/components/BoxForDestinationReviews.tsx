import React from 'react';
import ReviewGrid from './ReviewGrid';
import { ReviewProps } from './ReviewBox';
import { Link } from 'react-router-dom';

export interface BoxProps {
  title: string;
  name: string;
}

const BoxForDestinationInfo: React.FC<BoxProps> = ({ title, name }) => {
    const reviews: ReviewProps[] = [
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
      ];
      
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