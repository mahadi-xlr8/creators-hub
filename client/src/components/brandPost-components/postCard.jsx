import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { buttonDebounce } from "../helper/debounce";
import { socket } from "../../socket";

const PostCard = ({ data, loginData }) => {
  const [intarested, setintarested] = useState(data.interested);
  useEffect(() => {
    setintarested(data.interested);
  }, [data]);
  function handleIntarested() {
    if (!loginData.login) {
      toast("Please login for this feature.", {
        icon: "❗️",
        duration: 2000,
      });
      return;
    }

    if (!intarested) {
      socket.emit("notification", {
        brand: data.brandId,
        time: new Date().toLocaleString("en-US"),
        clickLink: "/brand/post/" + data._id.toString(),
        jobId: data._id,
        profileImg: loginData.profileImg,
        message: "is interested on your job post."
      });
      toast.success("Notification sended to the brand!", { duration: 2000 });
    } else {
      socket.emit("remove-interested", {
        jobId: data._id,
        brandId: data.brandId,
      });

      toast("Removed from interested!", {
        icon: "❌",
        duration: 2000,
      });
    }
    setintarested(!intarested);

    // experiment
    /*
    socket.on("notification", (values) => {
      const action = values.action;
      let message;
      if (action == "intarest") {
        message = " shows intarest on your job.";
      } else if (action == "comment") {
        message = " commented on your post.";
      }
      toast.success(values.name+ message)
      console.log(values);
    });
    */
  }
  const countryMap = { Bangladesh: "bd", India: "in", USA: "us", Canada: "ca" };
  const country = countryMap[data.country];
  return (
    <div class="CampaignCard__Wrapper-sc-1twbu8n-0 bbKwX">
      <div class="fade-in" style={{ opacity: 1 }}>
        <div class="campaign-card-inner">
          <Link to={"/brand/post/" + data._id.toString()}>
            <div class="basic-info">
              {/* name and title */}
              <p class="brand">{data.brandName}</p>
              <p class="title">{data.title}</p>
            </div>
            <div class="details">
              <div class="product">
                <div class="thumbnail">
                  <div class="ImageLoader__Wrapper-sc-1fuj46z-0 igigqf">
                    <img
                      src={data.images[0]}
                      alt=""
                      class="smooth-image visible"
                    />
                  </div>
                </div>
              </div>
              <div class="requirements">
                <div class="qualifications">
                  {data.followers ? (
                    <div class="requirement">
                      <span class="label">Followers</span>
                      <span class="value">{data.followers}</span>
                    </div>
                  ) : undefined}

                  {data.age ? (
                    <div class="requirement">
                      <span class="label">Age</span>
                      <span class="value">{data.age} or more</span>
                    </div>
                  ) : undefined}
                  <div class="requirement">
                    <span class="label">Country</span>
                    <span class="value">
                      <img
                        data-testid="circle-country-flag"
                        class="flag"
                        title="bd"
                        height="100"
                        src={`https://hatscripts.github.io/circle-flags/flags/${country}.svg`}
                      />
                    </span>
                  </div>
                  {data.paid ? (
                    <div class="requirement">
                      <span class="niche null">{data.benefit}</span>
                    </div>
                  ) : (
                    <div class="requirement">
                      <span class="niche null">Not a paid campaign</span>
                    </div>
                  )}
                </div>
                <div class="objectives">
                  <a class="strategy" href={"#"} style={{ color: "black" }}>
                    <img class="icon" src="#" alt="" />
                    <p>{data.platform}</p>
                    <span class="format">{data.content}</span>
                  </a>
                </div>
              </div>
            </div>
          </Link>
          {!loginData.login || loginData.role === "creator" ? (
            <div
              className={"btn-intarested" + (intarested ? " clicked" : "")}
              onClick={buttonDebounce(handleIntarested)}
            >
              Intarested
            </div>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
