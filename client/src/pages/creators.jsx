import React, { Component } from "react";
import NevBar from "../components/nevBar";
import CreatorCard from "../components/craetorCard";
import axios from "axios";
import "./creators.css";
import SearchBox from "../components/search";
import Pagination from "../components/pagination";
import { searchDebounce } from "../components/helper/debounce";
class Creators extends React.Component {
  state = { searchValue: "", currentPage: 1 };
  constructor() {
    super();
    axios
      .get("/creator/list?page=1")
      .then((res) => {
        this.setState({ data: res.data.data, totalPage: res.data.total });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  handleChange = (e) => {
    let x = e.target.value;
    this.setState({ searchValue: x });

    searchDebounce(() => this.handleSearch(e.target.value));
  };

  handleSearch = (value) => {
    axios
      .get(`/creator/search?value=${value}`)
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  };

  handlePageChange = (page) => {
    if (page != this.state.currentPage) {
      axios.get(`/creator/list?page=${page}`).then((res) => {
        this.setState({ data: res.data.data });
      });
      this.setState({ currentPage: page });
    }
  };
  render() {
    return (
      <>
        <NevBar userType="Creators" />
        <SearchBox
          onChange={this.handleChange}
          value={this.state.searchValue}
          title="Creators"
          description="List of all the creators. You can search the creator by their name."
          placeholder="Search Creators"
        />
        <div
          className="creators-cards"
          style={{ margin: "1rem", color: "rgba(0,0,0,.85)" }}
        >
          {this.state.data
            ? this.state.data.map((creator) => (
                <CreatorCard creator={creator} />
              ))
            : ""}
        </div>
        <Pagination
          onePage={10}
          totalData={Number(this.state.totalPage)}
          onPageChange={this.handlePageChange}
        />
      </>
    );
  }
}

export default Creators;
