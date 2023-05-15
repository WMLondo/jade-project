import React from "react";
import classes from "./FieldWitLabel.module.css";
import Field from "../../../../atoms/Input/Field/Field";
import Label from "../../../../atoms/Label/Label";
import ErrorMessage from "../../../../atoms/Input/ErrorMessage/ErrorMessage";

const FieldWitLabel = ({
  id,
  label,
  placeholder,
  type,
  w,
  name,
  value,
  onChange,
  onBlur,
  errorMessage,
  hasError,
}) => {
  return (
    <div className={classes.input} style={{ width: w }}>
      <Label htmlFor={id}>{label}</Label>
      <Field
        id={id}
        name={name}
        w="100%"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default FieldWitLabel;
