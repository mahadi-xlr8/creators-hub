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
import CreatorsHome from "./pages/creatorsHome";
import BrandPost from "./pages/brandPost";
import PostDetail from "./pages/postDetail";
import PostNewWork from "./pages/postNewWork";
import CreatorProfileEdit from "./pages/creatorProfileEdit";
import { loginInfo, newNotifications } from "./globalState";
import { useAtom } from "jotai";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { socket } from "./socket";
import toast from "react-hot-toast";
function App() {
  const [login, setLogin] = useAtom(loginInfo);
  const [notification, setNotification] = useAtom(newNotifications);
  useEffect(() => {
    // getting the information if the logged in already
    axios
      .get("/isLogin", {
        headers: {
          "access-token": Cookies.get("access-token"),
        },
      })
      .then(({ data }) => {
        setLogin({
          login: data.login,
          name: data.name,
          role: data.role,
          id: data.id,
        });
      })
      .catch((err) => {
        setLogin({ login: false });
      });

    // receiving notification through socket io

    socket.on("receive-notification", (data) => {
      toast.success(`${data.userName} ${data.message}`, {
        position: "top-center",
      });
      console.log("from app: ", data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route
          path="/creator/profile/edit/:id"
          element={<CreatorProfileEdit />}
        />
      </Routes>
    </>
  );
}

export default App;
