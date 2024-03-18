import "./App.css";
import Navbar from "./Navbar";
import Admin from "./components/Admin";
import About from "./pages/About";
import DestinationInformation from "./pages/DestinationInformation";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileReviewPage from "./pages/ProfileReviewPage";
import ReviewPage from "./pages/ReviewPage";
import SignInSide from "./pages/SignInSide";
import SignUpSide from "./pages/SignUpSide";
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
          <Route path="/SigninSide" element={<SignInSide />} />
          <Route path="/SignupSide" element={<SignUpSide />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </div>
      
      <Routes>
        {/* <Route path="/DestinationInformation/" element={<DestinationInformation />} /> */}
        <Route path="/DestinationInformation/:name" element={<DestinationInformation />} />
        <Route path="/ReviewPage/:name" element={<ReviewPage />} />
        <Route path="/ProfileReviewPage/:name" element={<ProfileReviewPage />} />

      </Routes>
      
    </>
  );
}

export default App;
