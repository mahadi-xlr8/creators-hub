import NevBar from "../components/nevBar";
import SearchBox from "../components/search";
import Filter from "../components/brandPost-components/filter";
import PostCard from "../components/brandPost-components/postCard";
import React from "react";
import Pagination from "../components/pagination";
import axios from "axios";
import toast from "react-hot-toast";
import JotaiWrapper from "../components/helper/jotaiWrapper";
import { searchDebounce } from "../components/helper/debounce";
class BrandPost extends React.Component {
  state = {
    searchValue: "",
    currentPage: 1,
  };
  componentDidMount() {
    axios
      .get("/brand/job/list", {
        params: { page: this.state.currentPage, userId: this.props.userId },
      })
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
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId != this.props.userId) {
      axios
        .get("/brand/job/list", {
          params: { page: this.state.currentPage, userId: this.props.userId },
        })
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
  }

  handleDebouce = () => {
    searchDebounce(() => this.handleFilter({}));
  };

  handleSearch = (e) => {
    this.setState({ searchValue: e.target.value });
    this.handleDebouce();
  };

  handleFilter = (data) => {
    data.page = this.state.currentPage;
    if (this.state.searchValue != "") data.title = this.state.searchValue;
    axios
      .get("/brand/job/list", {
        params: data,
      })
      .then((res) => {
        const jobData = res.data.data;
        const totalData = res.data.total;
        this.setState({ jobs: jobData, totalJobs: totalData });
      })
      .catch((err) => console.log(err.message));
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <JotaiWrapper>
        {({ loginData }) => (
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
                  title="Available Jobs"
                  description="Search the job you are looking for by their title!"
                />
                <div className="creators-cards">
                  {this.state.jobs && this.state.totalJobs > 0 ? (
                    this.state.jobs.map((job) => {
                      return (
                        <PostCard
                          key={job._id}
                          data={job}
                          loginData={loginData}
                        />
                      );
                    })
                  ) : (
                    <h2>Sorry, no jobs to show!</h2>
                  )}
                </div>

                <Pagination
                  onePage={10}
                  totalData={this.state.totalJobs}
                  onPageChange={this.handlePageChange}
                />
              </div>
            </main>
          </>
        )}
      </JotaiWrapper>
    );
  }
}

export default BrandPost;
