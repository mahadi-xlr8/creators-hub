import Dropdown from "./dropdown";
import Checkbox from "./checkbox";
const RefineSearch = (props) => {
  const country = [
    {
      name: "Bangladesh",
      img: "https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/bd.svg",
    },
    {
      name: "India",
      img: "https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/in.svg",
    },
    {
      name: "USA",
      img: "https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/us.svg",
    },
    {
      name: "Canada",
      img: "https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/ca.svg",
    },
  ];

  const order=[
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
  ]

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
        onClick={props.onOrderChange}
      />
      <Dropdown placeholder="Select Brand" values={brand} onClick={props.onBrandChange}/>
      <Checkbox value={props.paidValue} onPaidChange={props.onPaidChange}/>
    </>
  );
};

export default RefineSearch;
