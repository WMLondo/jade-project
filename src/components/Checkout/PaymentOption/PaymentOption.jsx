import React from "react";
import FormCard from "../FormCard/FormCard";
import { RadioButtonForm } from "../../ui/Input/Radio Button/RadioButton";
import classes from "./PaymentOption.module.css";

const PaymentOption = ({ register, errors }) => {
  return (
    <FormCard title="Metodo de Pago">
      {errors.payment?.message && (
        <span className={classes["payment-error"]}>
          {errors.payment?.message}
        </span>
      )}
      <div className={classes.row}>
        <RadioButtonForm
          id="online-payment"
          label="Pago en Linea"
          value="online-payment"
          {...register("payment")}
        />
        <RadioButtonForm
          id="cash-payment"
          label="Pago con efectivo"
          value="cash-payment"
          {...register("payment")}
        />
        <RadioButtonForm
          id="pos-payment"
          label="Pago con POS"
          value="pos-payment"
          {...register("payment")}
        />
      </div>
    </FormCard>
  );
};

export default PaymentOption;
