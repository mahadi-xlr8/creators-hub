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
      .get("/brand/job/findById", {
        headers: {
          "access-token": Cookies.get("access-token"),
        },
        params: {
          id,
        },
      })
      .then((res) => {
        setJobData(res.data);
        setBrand(res.data.brandId);
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
    contact:"https://google.com",
  };
  console.log("job data: ", Object.keys(jobData).length);
  const handleDelete = () => {
    axios
      .delete("/brand/job/delete", {
        params: { job: jobData._id, brand: brand._id },
        headers: {
          "access-token": Cookies.get("access-token"),
        },
        data: { images: jobData.images },
      })
      .then((res) => {
        toast.success(res.data);
        window.location.replace("/");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <>
      <NevBar />
      {Object.keys(jobData).length != 0 ? (
        <>
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
                <Requirments
                  data={data}
                  brandId={brand._id}
                  onDelete={handleDelete}
                />
                <CommentBox />
                <BrandInfo brand={brand} />
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <h2 style={{padding:"40px", textAlign:"center"}}>404 not found!</h2>
      )}
    </>
  );
};

export default PostDetail;
