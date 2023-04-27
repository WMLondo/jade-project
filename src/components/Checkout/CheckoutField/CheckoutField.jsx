import React from "react";
import classes from "./CheckoutField.module.css";
import Field from "../../ui/Input/Field/Field";
import Label from "../../ui/Label/Label";
import ErrorMessage from "../../ui/Input/ErrorMessage/ErrorMessage";

const CheckoutField = ({
  id,
  label,
  placeholder,
  w,
  h,
  type,
  register,
  errorMessage,
}) => {
  return (
    <div className={classes.input}>
      <Label htmlFor={id}>{label}</Label>
      <Field
        id={id}
        placeholder={placeholder}
        type={type}
        width={w}
        height={h}
        {...register}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};

export default CheckoutField;
