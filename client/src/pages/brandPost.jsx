import NevBar from "../components/nevBar";
import SearchBox from "../components/search";
import Filter from "../components/brandPost-components/filter";
import Footer from "./footer";
import PostCard from "../components/brandPost-components/postCard";
import React from "react";
import Pagination from "../components/pagination";

class BrandPost extends React.Component {
  state = {
    searchValue: "",
    totalData:10,
  };

  handleSearch = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleFilter = (data) => {
    console.log(data);
  };
  handlePageChange=(page)=>{
    console.log(page)
  }

  render() {
    return (
      <>
        <NevBar
          userType="work posts"
        />
        <main className="brand-post-container">
          <div className="filter-aside">
            <div className="filter">
              <Filter onClick={this.handleFilter} />
            </div>
          </div>
          <div className="content">
            <SearchBox
              onChange={this.handleSearch}
              value={this.state.searchValue}
            />
            <div className="creators-cards">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
            <Pagination
          onePage={10}
          totalData={Number(this.state.totalData)}
          onPageChange={this.handlePageChange}
        />
          </div>
          
        </main>

      </>
    );
  }
}

export default BrandPost;
