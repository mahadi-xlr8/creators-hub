import { Link } from "react-router-dom";
const BackButton = (props) => {
  return (
    <div
      className="job-status-container"
      style={{
        backgroundColor: props.status ? "rgb(104, 250, 104)" : "#a2cbf1",
      }}
    >
      <img
        src={
          props.status
            ? "/images/icons/completed.svg"
            : "/images/icons/searching.svg"
        }
        alt=""
      />
      <p className="text">
        {props.status ? "Completed!" : "Looking for creator"}
      </p>
      {!props.status ? (
        <>
          {" "}
          <span className="dot-animation">.</span>
          <span className="dot-animation">.</span>
          <span className="dot-animation">.</span>
        </>
      ) : null}
    </div>
  );
};

export default BackButton;
