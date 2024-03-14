import React from "react";
import DestinationBox, { DestinationProps } from "./DestinationBox";

interface DestinationGridProps {
  destinations: DestinationProps[];
}

const DestinationGrid: React.FC<DestinationGridProps> = ({ destinations }) => {
  const generateAdBox = () => ({
    id: null,
    isAd: true,
    name: "AD",
    country: "",
    picture: null, // add default picture at some point i think would be cool
    link: "#",
  });

  const destinationsWithAds = destinations.reduce<
    (DestinationProps | { isAd: boolean })[]
  >((acc, dest, index) => {
    acc.push(dest);
    if ((index + 1) % 4 === 0) {
      acc.push(generateAdBox()); // only modulo 4 will be an add
    }
    return acc;
  }, []);

  // I just added this style to make the ad stand out a bit more, didnt want to mess with the original css
  const adStyle: React.CSSProperties = {
    fontSize: "4em",
    textAlign: "center",
    paddingTop: "69px",
  };

  return (
    <div className="destination-grid">
      {destinationsWithAds.map((dest, index) =>
        dest.isAd ? (
          <div key={`ad-${index}`} className="destination-box" style={adStyle}>
            AD
          </div>
        ) : (
          <DestinationBox key={dest.id || index} {...dest} />
        )
      )}
    </div>
  );
};

export default DestinationGrid;
