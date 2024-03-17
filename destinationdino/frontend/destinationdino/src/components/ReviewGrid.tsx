import React from "react";
import ReviewBox, { ReviewProps } from "./ReviewBox";

interface ReviewGridProps {
  reviews: ReviewProps[];
}

const ReviewGrid: React.FC<ReviewGridProps> = ({ reviews }) => {
  return (
    <div className="review-grid">
      {reviews.map((review, index) => (
        <ReviewBox key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewGrid;