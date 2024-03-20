import React from "react";
import ProfileReviewBox, { ReviewProps } from "./ProfileReviewBox";

interface ReviewGridProps {
  reviews: ReviewProps[];
}

const ReviewGrid: React.FC<ReviewGridProps> = ({ reviews }) => {
  return (
    <div className="review-grid">
      {reviews.map((review, index) => (
        <ProfileReviewBox key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewGrid;