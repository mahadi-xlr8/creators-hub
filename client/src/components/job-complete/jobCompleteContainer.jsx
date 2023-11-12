import { useState, useEffect } from "react";
import Dropdown from "../brandPost-components/dropdown";
import TextArea from "../post-work/textArea";
import UpdateButton from "../edit-profile/updateButton";
import { completeModal } from "../../globalState";
import { useAtom } from "jotai";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
const JobCompleteContainer = (props) => {
  const [modal, setModal] = useAtom(completeModal);
  const starNo = [1, 2, 3, 4, 5];
  const [star, setStar] = useState(0);
  const [creators, setCreators] = useState([]);
  const [selectedCreator, setSelectedCreator] = useState({ name: "" });
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    axios
      .get(`/brand/job/interested-creator?jobId=${props.jobId}`, {
        headers: {
          "access-token": Cookies.get("access-token"),
        },
      })
      .then((res) => {
        let data = [];
        res.data.map((e) => {
          data.push({ name: e.senderName, img: e.senderImg, id: e.sender });
        });
        setCreators(data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  const handleDropdownChange = (value) => {
    setSelectedCreator(value);
  };
  const handleSubmit = () => {
    console.log(selectedCreator);
    if (star === 0) {
      setError("Rating is required!");
      return;
    }
    if (selectedCreator.name === "") {
      setError("No creator selected!");
      return;
    }
    axios
      .post(
        "/brand/job/complete",
        {
          brandName: props.brandName,
          brandImg: props.brandImg,
          creatorId: selectedCreator.id,
          creatorName: selectedCreator.name,
          creatorImg: selectedCreator.img,
          jobId: props.jobId,
          productImg: props.productImg,
          jobLink: `/brand/post/${props.jobId}`,
          star: star,
          description: description,
        },
        {
          headers: {
            "access-token": Cookies.get("access-token"),
          },
        }
      )
      .then((res) => {
        window.location.reload();
        toast.success(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="job-complete-container">
      <div className="stars">
        <p className="text">rating:</p>
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
      <div className="creator">
        <Dropdown
          selectedData={selectedCreator}
          values={creators}
          placeholder="Select Creator"
          onChange={handleDropdownChange}
        />
      </div>
      <div className="complete-text">
        <TextArea
          placeholder="Write here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <p className="error-message">{error}</p>
      <div className="submit">
        <UpdateButton text="Cancel" onClick={() => setModal(false)} />
        <UpdateButton text="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default JobCompleteContainer;
