import Dropdown from "./dropdown";
import Checkbox from "./checkbox";
import {useState,useEffect} from "react"
import axios from 'axios'
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
  const[brand,setBrand]=useState([]);

  useEffect(()=>{
    axios.get("/brand/names")
    .then(res=>{
      const values=[]
      res.data.map(e=>{
        values.push({name:e.name})
      })
      setBrand(values)
    })
    .catch(err=>console.log(err.message))
  },[])
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
