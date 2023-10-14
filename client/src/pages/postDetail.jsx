import NevBar from "../components/nevBar";
import BackButton from "../components/backButton";

import Footer from "./footer";
import { getCreators } from "../DB";
import CommentBox from "../components/post-details/commentBox";
import BrandInfo from "../components/post-details/brandInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import ProductImages from "../components/post-details/productImages";
import IntarestedBox from "../components/post-details/intarestedBox";
import JobName from "../components/post-details/jobName";
import Requirments from "../components/post-details/requirements";
const PostDetail = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState({});
  const [brand, setBrand] = useState({});
  useEffect(() => {
    axios
      .get("/brand/jobById", {
        headers: {
          "access-token": Cookies.get("access-token"),
        },
        params: {
          id,
        },
      })
      .then((res) => {
        setJobData(res.data);
        setBrand(res.data.brandId)
        
      })
      .catch((err) => {
        toast(err.message, {
          icon: "❗️",
          duration: 2000,
        });
      });
  }, []);
  const data = {
    platform: jobData.platform,
    content: jobData.content,
    gender: jobData.gender,
    followers: jobData.followers,
    age: jobData.age,
    benefit: jobData.benefit,
    country: jobData.country,
  };
  return (
    <>
      <NevBar />
      <div className="htgZbY">
        <div className="creator-body">
          <BackButton />
          <div className="campaign-body post-details">
            <JobName
              name={jobData.title}
              description={jobData.description}
              joined={jobData.added}
            />
            <ProductImages
              images={jobData.images ? jobData.images : ["no img"]}
            />
            <IntarestedBox />
            <Requirments data={data} />
            <CommentBox />
            <BrandInfo brand={brand}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetail;
