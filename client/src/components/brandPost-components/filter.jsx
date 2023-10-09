import { useState } from "react";
import React from "react";
import Deliverables from "./deliverables";
import Qualification from "./qualification";
import RefineSearch from "./refineSearch";
class Filter extends React.Component {
  state = {
    country: { name: "" },
    order: { name: "" },
    brand: { name: "" },
    platform: { name: "" },
    content: { name: "" },
    age: { name: "" },
    gender: { name: "" },
    paid: true,
  };

  handleDropdownChange = (data, field) => {
    const prev = this.state;
    prev[field] = data;
    this.setState(prev);
  };
  handlePaidChange = () => {
    const paid = this.state.paid;
    this.setState({ paid: !paid });
  };

  handleFilter = () => {
    this.props.onClick({
      age: this.state.age.name,
      country: this.state.country.name,
      brand: this.state.brand.name,
      content: this.state.content.name,
      gender: this.state.gender.name,
      order: this.state.order.name,
      paid: this.state.paid,
      platform: this.state.platform.name,
    });
  };
  render() {
    return (
      <aside>
        <RefineSearch
          onDropdownChange={this.handleDropdownChange}
          paid={this.state.paid}
          onPaidChange={this.handlePaidChange}
          order={this.state.order}
          brand={this.state.brand}
        />
        <Deliverables
          onDropdownChange={this.handleDropdownChange}
          platform={this.state.platform}
          content={this.state.content}
        />
        <Qualification
          onDropdownChange={this.handleDropdownChange}
          age={this.state.age}
          country={this.state.country}
          gender={this.state.gender}
        />
        <div className="btn btn-filter" onClick={this.handleFilter}>
          <span className="btn-icon">
            <img src="/images/creators/icons/filter-icon.svg" alt="" />
          </span>
          Filter
        </div>
      </aside>
    );
  }
}

export default Filter;
