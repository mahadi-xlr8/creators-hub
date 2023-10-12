const Checkbox = (props) => {
  return (
    <div className="checkbox-container" onClick={props.onPaidChange}>
      <input type="checkbox" id="paid-checkbox" checked={props.paid} />
      Only paid campaign
    </div>
  );
};

export default Checkbox;
