import classes from "./RadioButton.module.css";
import React from "react";

//4 valores que espero
//const { id, value, onChange, onBlur } = paymentMethod;
const RadioButton = ({ id, name, value, onChange, label, checked }) => {
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

export default RadioButton;
