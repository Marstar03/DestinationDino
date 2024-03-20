import React, { useEffect, useState } from 'react';
import ProfileReviewGrid from './ProfileReviewGrid';
import { ReviewProps } from './ProfileReviewBox';

export interface BoxProps {
  title: string;
  reviews: ReviewProps[];
}

const BoxForDestinationInfo: React.FC<BoxProps> = ({ title, reviews }) => {      
    return (
        <div>
            <h2>Your Reviews (click to edit)</h2>
            <ProfileReviewGrid reviews={reviews} />
        </div>
    );
};

export default BoxForDestinationInfo;