import { useEffect, useState } from "react";
import Intarested from "./intarested";
import axios from "axios";
const IntarestedBox = ({ jobId }) => {
  const [interestedCreators, setInterestedCreators] = useState([]);
  useEffect(() => {
    axios
      .get("/notification/interested-creators", {
        params: {
          jobId,
        },
      })
      .then((res) => {
        setInterestedCreators(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section className="intarested-box">
      <h2>Intarested Influencer</h2>
      {interestedCreators.map((e) => (
        <Intarested
          name={e.senderName}
          profileImg={e.senderImg}
          time={e.time}
          profileLink={e.senderProfile}
        />
      ))}
    </section>
  );
};

export default IntarestedBox;
