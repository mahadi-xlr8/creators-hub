const TextArea = (props) => {
  return (
    <textarea
      placeholder={props.placeholder?props.placeholder:"Write description..."}
      className="job-description"
      value={props.value}
      onChange={props.onChange}
    ></textarea>
  );
};

export default TextArea;
