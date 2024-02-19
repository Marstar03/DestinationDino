import React from "react";
import { Link } from "react-router-dom";

export interface DestinationProps {
  image: string;
  name: string;
  rating: number;
  link: string;
}

const DestinationBox: React.FC<DestinationProps> = ({
  image,
  name,
  rating,
  link,
}) => (
  <Link to="/DestinationInformation/" relative="path">
    <div className="destination-box">
      <img src={image} alt={name} />
      <div className="destination-info">
        <h3>{name}</h3>
        <span className="destination-rating">{rating}</span>
      </div>
    </div>
  </Link>
);

export default DestinationBox;
