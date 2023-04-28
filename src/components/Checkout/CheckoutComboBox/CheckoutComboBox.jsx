import React from "react";
import classes from "./CheckoutComboBox.module.css";
import Label from "../../ui/Label/Label";
import ErrorMessage from "../../ui/Input/ErrorMessage/ErrorMessage";
import { ComboBoxForm } from "../../ui/Input/ComboBox/ComboBox";

const CheckoutComboBox = ({
  id,
  label,
  data,
  w,
  h,
  register,
  errorMessage,
}) => {
  return (
    <div className={classes.input}>
      <Label htmlFor={id}>{label}</Label>
      <ComboBoxForm width={w} height={h} options={data} {...register} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
};

export default CheckoutComboBox;
