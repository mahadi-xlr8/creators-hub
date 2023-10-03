import { useState } from "react";
const InputText = (props) => {
  const [type, setType] = useState(props.type);

  return (
    <div className="input-field-baap">
      <input
        placeholder={props.placeholder}
        value={props.value}
        className="input-field"
        type={type || "text"}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default InputText;
