const SubmitButton = (props) => {
  return (
    <div class="buttons signup-button" onClick={(e)=>{
      e.preventDefault()
      props.onClick()
    }}>
      <button type="submit" class="ant-btn ant-btn-primary">
        <span>{props.text}</span>
      </button>
    </div>
  );
};

export default SubmitButton;
