const Input = (props) => {
  return (
    <>
      <div className="job-input edit-input">
      <p className="input-name">{props.label}</p>
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          readOnly={props.readOnly?true:false}
        />
      </div>
    </>
  );
};

export default Input;
