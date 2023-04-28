import classes from "./RadioButton.module.css";
import React from "react";

const RadioButton = ({ name, id, value, onChange, checked, label }) => {
  return (
    <label htmlFor={id} className={classes["radio-label"]}>
      <input
        className={classes["radio-input"]}
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className={classes["custom-radio"]} />
      {label}
    </label>
  );
};

export const RadioButtonForm = React.forwardRef(
  ({ name, id, checked, value, onChange, onBlur, label }, ref) => (
    <label htmlFor={id} className={classes["radio-label"]}>
      <input
        className={classes["radio-input"]}
        type="radio"
        name={name}
        ref={ref}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
      />
      <span className={classes["custom-radio"]} />
      {label}
    </label>
  )
);

export default RadioButton;
