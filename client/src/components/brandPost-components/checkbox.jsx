import { useState } from "react";
const Checkbox = (props) => {
  return (
    <div className="checkbox-container" onClick={props.onPaidChange}>
      <input type="checkbox" id="paid-checkbox" checked={props.paid} />
      Paid Campaign
    </div>
  );
};

export default Checkbox;
