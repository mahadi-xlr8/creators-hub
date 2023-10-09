import Dropdown from "./dropdown";
const Qualification = (props) => {
  const age = [];
  for (let i = 14; i <= 100; i++) {
    let text = i.toString();
    let temp = { name: text };
    age.push(temp);
  }
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
  const gender = [{ name: "Male" }, { name: "Female" }];
  return (
    <>
      <h2 className="filter-title">Require Qualification</h2>
      <Dropdown
        placeholder="Age"
        values={age}
        onChange={props.onDropdownChange}
        field="age"
        selectedData={props.age}
      />
      <Dropdown
        placeholder="Country"
        values={country}
        onChange={props.onDropdownChange}
        field="country"
        selectedData={props.country}
      />
      <Dropdown
        placeholder="Gender"
        values={gender}
        onChange={props.onDropdownChange}
        field="gender"
        selectedData={props.gender}
      />
    </>
  );
};

export default Qualification;
