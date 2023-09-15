import React, { Component } from "react";
import NevBar from "../components/nevBar";
import CreatorCard from "../components/craetorCard";
import { getCreators } from "../DB";
import "./creators.css";
import SearchBox from "../components/search";
import { toLower } from "lodash";
import PostCard from "../components/brandPost-components/postCard";
class Creators extends React.Component {
  state = { searchValue: "" };
  constructor() {
    super();
    this.state.creatorData = getCreators();
    this.state.showCreator = getCreators();
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
  render() {
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
          {this.state.showCreator.map((creator) => (
            <CreatorCard {...creator} />
          ))}

        </div>
      </>
    );
  }
}

export default Creators;
