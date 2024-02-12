export interface ReviewProps {
    image: string;
    name: string;
    rating: number;
  }
  
  const ReviewBox: React.FC<ReviewProps> = ({
    image,
    name,
    rating,
  }) => {
    return (
      <div className="destination-box">
        <img src={image} alt={name} />
        <div className="destination-info">
          <h3>{name}</h3>
          <span className="destination-rating">{rating}</span>
        </div>
      </div>
    );
  };
  
  export default ReviewBox;