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
import BrandPost from "./pages/brandPost";
import PostDetail from "./pages/postDetail";
import PostNewWork from "./pages/postNewWork";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/brand" element={<Brands />} />
        <Route path="/brand/signup" element={<BrandsSignup />} />
        <Route path="/brand/login" element={<BrandsLogin />} />
        <Route path="/brand/post" element={<BrandPost />} />
        <Route path="/brand/new/post" element={<PostNewWork />} />
        <Route path="/brand/post/:id" element={<PostDetail />} />

        <Route path="/creator/find" element={<Creators />} />
        <Route path="/creator/signup" element={<CreatorSignup />} />
        <Route path="/creator/login" element={<CreatorsLogin />} />
        <Route path="/creator" element={<CreatorsHome />} />
        <Route path="/creator/:id" element={<CreatorsProfile />} />
        <Route path="/creator/:name/previous work" element={<PreviousWork />} />
      </Routes>
    </>
  );
}

export default App;
