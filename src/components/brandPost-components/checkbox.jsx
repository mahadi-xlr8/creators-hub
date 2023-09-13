import { useState } from "react";
const Checkbox = (props) => {
  const [checked, setChecked] = useState(true);
  function handleClick() {
      props.onPaidChange(!checked)
    setChecked(!checked);

  }
  return (
    <div className="checkbox-container" onClick={handleClick}>
      <input type="checkbox" name="" id="paid-checkbox" checked={checked} />
      Paid Campaign
    </div>
  );
};

export default Checkbox;
