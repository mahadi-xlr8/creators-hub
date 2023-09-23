import { useState } from "react";
import Deliverables from "./deliverables";
import Qualification from "./qualification";
import RefineSearch from "./refineSearch";
const Filter = (props) => {
  const [country, setCountry] = useState("");
  const [order, setOrder] = useState("");
  const [brand, setBrand] = useState("");
  const [platform, setPlatform] = useState("");
  const [contentType, setContentType] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [paid, setPaid] = useState(false);
  function handleCountry(value) {
    setCountry(value);
  }
  function handleOrder(value) {
    setOrder(value);
  }
  function handleBrand(value) {
    setBrand(value);
  }
  function handlePaid(value) {
    setPaid(value);
  }
  function handlePlatform(value) {
    setPlatform(value);
  }
  function handleContentType(value) {
    setContentType(value);
  }
  function handleAge(value) {
    setAge(value);
  }
  function handleGender(value) {
    setGender(value);
  }

  function handleFilter() {
    const data = {
      country,
      order,
      brand,
      platform,
      contentType,
      age,
      gender,
      paid,
    };
    props.onClick(data);
  }

  return (
    <aside>
      <RefineSearch
        onOrderChange={handleOrder}
        onBrandChange={handleBrand}
        onPaidChange={handlePaid}
      />
      <Deliverables
        onPlatformChange={handlePlatform}
        onContentChange={handleContentType}
      />
      <Qualification
        onAgeChange={handleAge}
        onCountryChange={handleCountry}
        onGenderChange={handleGender}
      />
      <div className="btn btn-filter" onClick={handleFilter}>
        <span className="btn-icon">
          <img src="/images/creators/icons/filter-icon.svg" alt="" />
        </span>
        Filter
      </div>
    </aside>
  );
};

export default Filter;
