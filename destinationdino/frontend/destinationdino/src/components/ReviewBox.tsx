import Rating from "@mui/material/Rating";

export interface ReviewProps {
    username: string;
    rating: number;
    review: string;
  }
  
  const ReviewBox: React.FC<ReviewProps> = ({
    username,
    rating,
    review,
  }) => {
    return (
      <div className="review-box">
        <h2>{username}</h2>
        <Rating name="read-only" value={rating} readOnly />
        <div className="destination-info">
          <h3>{review}</h3>
        </div>
      </div>
    );
  };
  
  export default ReviewBox;