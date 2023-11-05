import React, { Component } from "react";
import NevBar from "../components/nevBar";
import CreatorCard from "../components/craetorCard";
import axios from "axios";
import "./creators.css";
import SearchBox from "../components/search";
import { toLower } from "lodash";
import PostCard from "../components/brandPost-components/postCard";
import Pagination from "../components/pagination";
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
    let temp = this.state.creatorData.filter((data) => {
      const name = data.name.slice(0, x.length);
      if (toLower(name) == toLower(x)) return true;
    });
    this.setState({ showCreator: temp });
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
    console.log("creators:",this.state.data)
    return (
      <>
        <NevBar userType="Creators" />
        <SearchBox
          onChange={this.handleChange}
          value={this.state.searchValue}
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
