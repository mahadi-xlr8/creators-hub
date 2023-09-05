import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Brands from "./pages/brands";
import Creators from "./pages/creators";
import CreatorsProfile from "./pages/creatorsProfile";
import PreviousWork from "./pages/previousWork";
import CreatorSignup from "./pages/creatorsSignup";
import BrandsSignup from "./pages/brandsSignup";
import CreatorsLogin from "./pages/creatorsLogin";
import BrandsLogin from "./pages/brandsLogin";
import Profile from "./pages/profile";
import CreatorsHome from "./pages/creatorsHome";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/signup" element={<BrandsSignup />} />
        <Route path="/brands/login" element={<BrandsLogin />} />

        <Route path="/creators/find" element={<Creators />} />
        <Route path="/creators/signup" element={<CreatorSignup />} />
        <Route path="/creators/login" element={<CreatorsLogin />} />
        <Route path="/profile" element={<Profile name='Mehazabien Chowdhury'/>} />
        <Route path="/creators" element={<CreatorsHome/>}/>
        <Route path="/creators/:name" element={<CreatorsProfile />} />
        <Route path="/creators/:name/previous work" element={<PreviousWork />} />
      </Routes>
    </>
  );
}

export default App;
