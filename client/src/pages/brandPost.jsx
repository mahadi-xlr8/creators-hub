import NevBar from "../components/nevBar";
import SearchBox from "../components/search";
import Filter from "../components/brandPost-components/filter";
import PostCard from "../components/brandPost-components/postCard";
import React from "react";
import Pagination from "../components/pagination";
import axios from "axios";
import toast from "react-hot-toast";

class BrandPost extends React.Component {
  state = {
    searchValue: "",
    currentPage: 1,
  };
  constructor() {
    super();
    axios
      .get("/brand/job-list", { params: { page: this.state.currentPage } })
      .then((res) => {
        const jobData = res.data.data;
        const totalData = res.data.total;
        this.setState({ jobs: jobData, totalJobs: totalData });
      })
      .catch((err) => {
        toast("Something went wrong while fetching the jobs!", {
          icon: "❌",
          duration: 2000,
        });
      });
  }

  handleSearch = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleFilter = (data) => {
    data.page = this.state.currentPage;
    axios
      .get("/brand/job-list", {
        params: data,
      })
      .then((res) => {
        const jobData = res.data.data;
        const totalData = res.data.total;
        console.log(jobData)
        this.setState({ jobs: jobData, totalJobs: totalData });
      })
      .catch((err) => console.log(err.message));
  };
  handlePageChange = (page) => {
    console.log(page);
  };

  render() {
    console.log(this.state.jobs);
    return (
      <>
        <NevBar userType="work posts" />
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
              {this.state.jobs
                ? this.state.jobs.map((job) => <PostCard key={job._id} data={job}/>)
                : <h2>Sorry, no jobs to show!</h2>}
            </div>

            <Pagination
              onePage={10}
              totalData={this.state.totalJobs}
              onPageChange={this.handlePageChange}
            />
          </div>
        </main>
      </>
    );
  }
}

export default BrandPost;
