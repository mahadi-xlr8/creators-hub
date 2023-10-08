import { useState } from "react";

const Dropdown = (props) => {
  const [active, setActive] = useState(false);
  function handleClick(value) {
    let count = 0;
    for (let i in props.selectedData) {
      if (props.selectedData[i] == value[i]) count++;
    }
    if (count) {
      props.onChange({name:""},props.field)

    }
    else props.onChange(value,props.field)
    setActive(!active)
  }
  return (
    <>
      <div className="dropdown-container">
        <div
          className="dropdown-box"
          onClick={() => {
            setActive(!active);
          }}
        >
          <span
            className={
              "dropdown-display" +
              (props.selectedData.name != "" ? " selected" : "")
            }
          >
            {props.selectedData.img != undefined ? (
              <span className="dropdown-img">
                <img src={props.selectedData.img} alt="" />
              </span>
            ) : (
              ""
            )}
            <span>{props.selectedData.name==""?props.placeholder:props.selectedData.name}</span>
          </span>
          <span className="dropdown-arrow">
            <img
              src="/images/creators/icons/arrow-gray.svg"
              className={active ? "active" : "deactive"}
              alt=""
              srcset=""
            />
          </span>
        </div>
        {active ? (
          <div className="dropdown-options">
            {props.values.map((e,index) => {
              return (
                <div
                  className={
                    "option" + (props.selectedData.name == e.name ? " selected" : "")
                  }
                  onClick={() => handleClick(e)}
                  key={index}
                >
                  {e.img != undefined ? (
                    <span className="dropdown-img">
                      <img src={e.img} alt="" />
                    </span>
                  ) : (
                    ""
                  )}
                  <span>{e.name}</span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Dropdown;
