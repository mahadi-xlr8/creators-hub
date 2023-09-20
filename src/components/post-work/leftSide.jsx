const LeftSide = (props) => {
  return (
    <div className="left-side">
      <h1 className="title">
        {props.heading}
      </h1>
      <p className="more">
        {props.description}
      </p>
    </div>
  );
};

export default LeftSide;
