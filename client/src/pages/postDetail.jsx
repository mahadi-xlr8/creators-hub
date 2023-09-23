import NevBar from "../components/nevBar";
import BackButton from "../components/backButton";
import CreatorNameBlock from "../components/creatorNameBlock";
import CreatorImages from "../components/creatorsImages";
import CreatorQualification from "../components/creatorQualification";
import Footer from "./footer";
import { getCreators } from "../DB";
import CommentBox from "../components/post-details/commentBox";
import BrandInfo from "../components/post-details/brandInfo";
const PostDetail = () => {
  const data = getCreators();
  console.log(data[0].images)
  return (
    <>
      <NevBar />
      <div className="htgZbY">
        <div className="creator-body">
          <BackButton />
          <div className="campaign-body post-details">
            <CreatorNameBlock name={"Mehazabien"} tags={data[0].tags} />
            <CreatorImages images={["/images/creators/mehazabien/img1.jpg"]} />
            <CreatorQualification data={data[0]} />
            <CommentBox/>
            <BrandInfo/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetail;
