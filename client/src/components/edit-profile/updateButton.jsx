const UpdateButton = (props) => {
  return (
    <button
      className="update-button"
      onClick={props.onPasswordChange || props.onClick}
    >
      {props.text}
    </button>
  );
};

export default UpdateButton;
