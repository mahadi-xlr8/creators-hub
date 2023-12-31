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
import { loginInfo, notifications } from "./globalState";
import { useAtom } from "jotai";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { socket } from "./socket";
import toast from "react-hot-toast";
import NotificationPopup from "./components/notification/notificationPopup";
function App() {
  const [login, setLogin] = useAtom(loginInfo);
  const [notification, setNotification] = useAtom(notifications);
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
          profileImg: data.profileImg,
        });
      })
      .catch((err) => {
        setLogin({ login: false });
      });

    // fetching notifications from server
    axios
      .get("/notification", {
        headers: {
          "access-token": Cookies.get("access-token"),
        },
      })
      .then((res) => {
        setNotification(res.data);
      });

    // receiving notification through socket io

    socket.on("receive-notification", (data) => {
      toast(
        (t) => (
          <NotificationPopup
            img={data.senderImg}
            name={data.senderName}
            message={data.message}
            terminate={() => {
              toast.dismiss(t.id);
            }}
          />
        ),
        {
          position: "top-center",
          duration: 2000,
          style: {
            maxWidth: "400px",
            padding: 0,
          },
        }
      );
      setNotification((prev) => {
        return [data, ...prev];
      });
    });

    socket.on("remove-interest", ({ notificationId }) => {
      setNotification((prev) => prev.filter((e) => e._id != notificationId));
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brands />} />
        <Route path="/brand/signup" element={<BrandsSignup />} />
        <Route path="/brand/login" element={<BrandsLogin />} />
        <Route path="/brand/post" element={<BrandPost userId={login.id} />} />
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
