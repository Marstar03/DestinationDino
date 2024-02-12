import "./App.css";
import Navbar from "./Navbar";
import About from "./pages/About";
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
          <Route path="/SigninSide" element={<SignInSide />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
