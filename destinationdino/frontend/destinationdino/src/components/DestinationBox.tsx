import DefaultDestination from "../assets/DefaultDestination.jpg";
import React from "react";
import { Link } from "react-router-dom";

export interface DestinationProps {
  id: (string | number) | null | undefined;
  isAd: any;
  name: string;
  country: string;
  picture: string;
  link: string;
}

const DestinationBox: React.FC<DestinationProps> = ({
  name,
  country,
  picture,
}) => {
  return (
    // <Link to={`/DestinationInformation/${encodeURIComponent(name)}`}>
    <Link to={`/DestinationInformation/${encodeURIComponent(name.trim())}`}>
      {/* <Link to={`/DestinationInformation/`}> */}
      <div className="destination-box">
        <img
          src={picture != null ? picture : DefaultDestination}
          alt={name}
          style={{ maxHeight: "100px", minHeight: "100px" }}
        />
        <div className="destination-info">
          <h3>{name}</h3>
          <h4>{country}</h4>
          <span className="destination-rating">{3.5}/5</span>
        </div>
      </div>
    </Link>
  );
};

export default DestinationBox;
