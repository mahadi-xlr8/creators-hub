import { useState } from "react";

const Dropdown = (props) => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({name:props.placeholder});
  function handleClick(value) {
    setData(value);
    props.onClick(value.name);
  }
  return (
    <>
      <div
        className="dropdown-container"
      >
        <div
          className="dropdown-box"
          onClick={() => {
            setActive(!active);
          }}
        >
          <span
            className={
              "dropdown-display" + (data.name != props.placeholder ? " selected" : "")
            }
          >
            {data.img != undefined ? (
              <span className="dropdown-img">
                <img src={data.img} alt="" />
              </span>
            ) : (
              ""
            )}
            <span>{data.name}</span>
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
            {props.values.map((e) => {
              return (
                <div
                  className={"option" + (data.name == e.name ? " selected" : "")}
                  onClick={() => handleClick(e)}
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
