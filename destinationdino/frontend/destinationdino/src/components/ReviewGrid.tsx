import React from "react";
import DestinationBox, { DestinationProps } from "./DestinationBox";

interface DestinationGridProps {
  destinations: DestinationProps[];
}

const DestinationGrid: React.FC<DestinationGridProps> = ({ destinations }) => {
  return (
    <div className="destination-grid">
      {destinations.map((dest, index) => (
        <DestinationBox key={index} {...dest} />
      ))}
    </div>
  );
};

export default DestinationGrid;