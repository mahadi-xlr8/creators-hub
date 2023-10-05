import { useParams } from "react-router-dom";
import NavBarLogin from "../components/navBarLogin";
import BackButton from "../components/backButton";
import CreatorNameBlock from "../components/creatorNameBlock";
import CreatorQualification from "../components/creatorQualification";
import CreatorImages from "../components/creatorsImages";
import { getCreatorsByName } from "../DB";
import PreviousWork from "./previousWork";
import NevBar from "../components/nevBar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Footer from "./footer";
import axios from "axios";
const CreatorsProfile = (props) => {
  const { id } = useParams();
  const [isFlipped, setFlipped] = useState(false);
  const [foundMessage, setFoundMessage] = useState("Please wait...");
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("/creator/info", {
        params:{id: id},
        headers: {
          "access-token": Cookies.get("access-token"),
        },
      })
      .then((res) => {
        setFoundMessage("");
        setData(res.data);
      })
      .catch((err) => {
        setFoundMessage(err.response.data);
      });
  }, []);

  return (
    <>
      <NevBar userType={"Creator"} profilePage={data.profile} />
      {foundMessage == "" ? (
        <>
          <div className="htgZbY">
            <div className="creator-body">
              <BackButton />
              <div className="campaign-body">
                <CreatorNameBlock
                  name={data.name}
                  joined={data.joined}
                  tags={data.tags}
                />
                <CreatorImages image={data.profileImg} />
                <CreatorQualification data={data} />
              </div>
            </div>

            {/* TODO: complete previous work after finishing the backend */}
            {/* <div className="previous-works">
          <h1>previous works</h1>
          <PreviousWork name={data.name} isFlipped={isFlipped} handleFlipped={()=>{
            setFlipped(!isFlipped)
          }}/>
        </div> */}
          </div>
          <Footer />
        </>
      ) : (
        <h2 className="found-message">{foundMessage}</h2>
      )}
    </>
  );
};

export default CreatorsProfile;
