import { reviewModal } from "../../globalState";
import { useAtom } from "jotai";
import ModalWrapper from "../helper/modalWrapper";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import TextArea from "../post-work/textArea";
import UpdateButton from "../edit-profile/updateButton";
import { useState } from "react";
import { loginInfo } from "../../globalState";
const Rating = () => {
  const [ratingModal, setRatingModal] = useAtom(reviewModal);
  const starNo = [1, 2, 3, 4, 5];
  const [star, setStar] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const login = useAtom(loginInfo);
  const handleSubmit = () => {
    if (star === 0) {
      setError("Please select stars!");
      return;
    }
    axios
      .post(
        "/review",
        {
          name: login[0].name,
          img: login[0].profileImg,
          role: login[0].role,
          rating: star,
          message,
        },
        {
          headers: {
            "access-token": Cookies.get("access-token"),
          },
        }
      )
      .then((res) => {
        toast.success(res.data);
        setRatingModal(false);
        setError("");
        setStar(0);
      })
      .catch((err) => {
        toast.error("something went wront!");
      });
  };
  return (
    <ModalWrapper isOpen={ratingModal} onClose={() => setRatingModal(false)}>
      <div className="job-complete-container">
        <div className="stars">
          <p className="text" style={{ color: "#444" }}>
            rating:
          </p>
          {starNo.map((e) => (
            <img
              src="/images/icons/star.svg"
              alt=""
              style={{
                filter: e > star ? "grayscale(100%)" : "grayscale(0)",
                cursor: "pointer",
              }}
              onClick={() => {
                setStar(e);
              }}
            />
          ))}
        </div>
        <div className="complete-text">
          <TextArea
            placeholder="Write here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <p className="error-message">{error}</p>
        <div className="submit">
          <UpdateButton
            text="Cancel"
            onClick={() => {
              setRatingModal(false);
              setError("");
              setStar(0);
            }}
          />
          <UpdateButton text="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Rating;
