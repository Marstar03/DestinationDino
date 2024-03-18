import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

export interface ReviewProps {
    destinationId: string;
    rating: number;
    review: string;
  }
  
  const ReviewBox: React.FC<ReviewProps> = ({
    destinationId,
    rating,
    review,
  }) => {
    return (
    <Link to={`/ProfileReviewPage/${encodeURIComponent(destinationId.trim())}`}>
        <div className="review-box">
            <h2>{destinationId}</h2>
            <Rating name="read-only" value={rating} readOnly />
            <div className="destination-info">
            <h3>{review}</h3>
            </div>
        </div>
    </Link>
    );
  };
  
  export default ReviewBox;