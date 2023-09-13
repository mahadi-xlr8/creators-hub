import { useState } from "react";
import RefineSearch from "./refineSearch";
const Filter = (props) => {
  const [country, setCountry] = useState("");
  const [order, setOrder] = useState("");
  const [brand, setBrand] = useState("");
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

  return (
    <aside className="filter-aside">
      <RefineSearch
        onOrderChange={handleOrder}
        onBrandChange={handleBrand}
        onPaidChange={handlePaid}
      />
    </aside>
  );
};

export default Filter;
