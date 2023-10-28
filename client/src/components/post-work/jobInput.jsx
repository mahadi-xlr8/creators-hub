const JobInput = (props) => {
  return (
    <div className="job-input" >
      <input
        type="text"
        placeholder={props.placeholder || "Ex- Mug Magic: Elevate Your Sip"}
        value={props.value}
        onChange={props.onChange}
      />
      {props.hint ? <p className="hint">hint: use a simple name</p> : ""}
    </div>
  );
};

export default JobInput;
