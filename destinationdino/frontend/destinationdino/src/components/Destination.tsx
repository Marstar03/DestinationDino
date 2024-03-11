import DefaultDestination from "../assets/DefaultDestination.jpg";

export interface StandardDestinationProps {
  name: string;
  country: string;
  picture: string;
  info: string;
  city: boolean;
  warm: boolean;
  coast: boolean;
  norway: boolean;
}

const Destination: React.FC<StandardDestinationProps> = ({
  name,
  country,
  picture,
  info,
  city,
  warm,
  coast,
  norway,
}) => {
  return (
    <div>name: {name}, country: {country}, picture: {picture}, info: {info}, isCity: {city}, isWarm: {warm}, isCoast: {coast}, isNorway: {norway}</div>
  );
};

export default Destination;