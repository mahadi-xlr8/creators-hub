import NevBar from "../components/nevBar";
import SearchBox from "../components/search";
import Filter from "../components/brandPost-components/filter";
import { useState } from "react";
import Footer from './footer';
import PostCard from "../components/brandPost-components/postCard";
const BrandPost = (props) => {
  const [searchValue, setSearchValue] = useState("");
  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleFilterData(data){
    // TODO: complete the work
    console.log(data)
  }

  return (
    <>
      <NevBar
        role="brand"
        name="mehazabien"
        login={true}
        userType="work posts"
      />
      <main className="brand-post-container">
        <div className="filter-aside">
          <div className="filter">
            <Filter onClick={handleFilterData}/>
          </div>
        </div>
        <div className="content">
          <SearchBox onChange={handleChange} value={searchValue} />
          <div className="creators-cards">
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
          </div>
        </div>
      </main>
      <Footer/>
      
    </>
  );
};

export default BrandPost;
