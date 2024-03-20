import DefaultDestination from "../assets/DefaultDestination.jpg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserProfileProps } from "./UserProfile";

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
  const [currentUser, setCurrentUser] = useState<UserProfileProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `http://localhost:8080/currentUser`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const userData = await response.json();
        setCurrentUser(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  if (!currentUser) {
    return (
      <div className="destination-box">
        <img
          src={picture != null ? picture : DefaultDestination}
          alt={name}
          style={{ maxHeight: "100px", minHeight: "100px" }}
        />
        <div className="destination-info">
          <h3>{name}</h3>
          <h4>{country}</h4>
          <span className="destination-rating"></span>
        </div>
      </div>
    );
  } else {
    return (
      <Link to={`/DestinationInformation/${encodeURIComponent(name.trim())}`}>
        <div className="destination-box">
          <img
            src={picture != null ? picture : DefaultDestination}
            alt={name}
            style={{ maxHeight: "100px", minHeight: "100px" }}
          />
          <div className="destination-info">
            <h3>{name}</h3>
            <h4>{country}</h4>
          </div>
        </div>
      </Link>
    );
  }
};

export default DestinationBox;
