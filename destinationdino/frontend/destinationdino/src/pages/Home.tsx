import DestinationGrid from "../components/DestinationGrid";
import destinationImage from "../assets/bilde1.jpg";
import destinationImage2 from "../assets/bilde2.jpg";

// Example destinations
const destinations = [
  { image: destinationImage, name: "Destination 1", rating: 4.5 },
  { image: destinationImage2, name: "Destination 2", rating: 4.7 },
];

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <DestinationGrid destinations={destinations} />
      </div>
    </>
  );
}
