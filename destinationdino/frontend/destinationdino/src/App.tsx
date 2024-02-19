import "./App.css";
import Navbar from "./Navbar";
import DestinationBox from "./components/DestinationBox";
import About from "./pages/About";
import DestinationInformation from "./pages/DestinationInformation";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignInSide from "./pages/SignInSide";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/SignInSide" element={<SignInSide />} /> // Fixed the path to "/SignInSide"
        </Routes>
      </div>
      
      <Routes>
        <Route path="/DestinationInformation/" element={<DestinationInformation />} />
      </Routes>
      
    </>
  );
}

export default App;
