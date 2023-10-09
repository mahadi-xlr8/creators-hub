import Dropdown from "./dropdown";
import Checkbox from "./checkbox";
const RefineSearch = (props) => {
  const order = [
    {
      name: "Latest",
      img: "/images/creators/icons/arrow-up.svg",
    },
    {
      name: "Oldest",
      img: "/images/creators/icons/arrow-down.svg",
    },
    {
      name: "Completed",
      img: "/images/creators/icons/completed.svg",
    },
  ];

  const brand = [
    { name: "Colgate" },
    { name: "Spacex" },
    { name: "Apple" },
    { name: "Google" },
  ];

  return (
    <>
      <h2 className="filter-title">Refine Search</h2>
      <Dropdown
        placeholder="Select Order"
        values={order}
        onChange={props.onDropdownChange}
        field="order"
        selectedData={props.order}
      />
      <Dropdown
        placeholder="Select Brand"
        values={brand}
        onChange={props.onDropdownChange}
        field="brand"
        selectedData={props.brand}

      />
      <Checkbox paid={props.paid} onPaidChange={props.onPaidChange} />
    </>
  );
};

export default RefineSearch;
