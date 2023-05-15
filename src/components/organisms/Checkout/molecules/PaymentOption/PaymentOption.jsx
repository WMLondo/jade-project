import React from "react";
import FormCard from "../FormCard/FormCard";
import RadioButton from "../../../../atoms/Input/RadioButton/RadioButton";
import classes from "./PaymentOption.module.css";
import useInput from "../../../../../hooks/use-input";
import ErrorMessage from "../../../../atoms/Input/ErrorMessage/ErrorMessage";

const PaymentOption = ({ updateForm }) => {
  const paymentMethod = useInput({
    initialValue: "",
    validators: [],
    updateFormValue: updateForm,
  });
  return (
    <FormCard title="Metodo de Pago">
      <div className={classes.row}>
        <RadioButton
          label="Pago en Linea"
          name="paymentMethod"
          value="online-payment"
          checked={paymentMethod.value === "online-payment"}
          onChange={paymentMethod.onChange}
        />
        <RadioButton
          label="Pago con efectivo"
          name="paymentMethod"
          value="cash-payment"
          checked={paymentMethod.value === "cash-payment"}
          onChange={paymentMethod.onChange}
        />
        <RadioButton
          label="Pago con POS"
          name="paymentMethod"
          value="pos-payment"
          checked={paymentMethod.value === "pos-payment"}
          onChange={paymentMethod.onChange}
        />
      </div>
      {paymentMethod.hasError && (
        <ErrorMessage>{paymentMethod.errorMessage}</ErrorMessage>
      )}
    </FormCard>
  );
};

export default PaymentOption;
