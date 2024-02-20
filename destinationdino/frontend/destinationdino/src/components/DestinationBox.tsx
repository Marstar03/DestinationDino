import React from "react";
import { Link } from "react-router-dom";

import DefaultDestination from "../assets/DefaultDestination.jpg";

export interface DestinationProps {
  name: string;
  country: string;
  picture: string;
  link: string;
}

const DestinationBox: React.FC<DestinationProps> = ({
  name,
  country,
  picture,
  link,
}) => (
  <Link to="/DestinationInformation/" relative="path">
    <div className="destination-box">
      <img src={picture != null? picture : DefaultDestination} alt={name} style={{ maxHeight: '100px', minHeight: '100px' }} />
      <div className="destination-info">
        <h3>{name}</h3>
        <h4>{country}</h4>
        <span className="destination-rating">{3.5}/5</span>
      </div>
    </div>
  </Link>
);

export default DestinationBox;
