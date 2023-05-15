import React, { useState } from "react";
import classes from "./Checkout.module.css";
import DeliveryForm from "./molecules/DeliveryForm/DeliveryForm";
import OrderSummary from "./molecules/OrderSummary/OrderSummary";
import PaymentOption from "./molecules/PaymentOption/PaymentOption";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "../../../hooks/use-form";

const paymentOptions = {
  OnlinePayment: "online-payment",
  CashPayment: "cash-payment",
  PosPayment: "pos-payment",
};

const Checkout = () => {
  const { data, error, handleUpdateForm, handleClearForm, handleSubmit } =
    useForm({
      values: {
        name: "",
        phoneNumber: "",
        email: "",
        department: {},
        city: {},
        firstAddress: "",
        secondAddress: "",
        paymentMethod: "",
        cartItem: {},
      },
      validation: () => {
        const {
          name,
          phoneNumber,
          email,
          department,
          city,
          firstAddress,
          paymentMethod,
          cartItem,
        } = data;
        if (name === "") throw new Error("El campo nombre es requerido.");
        if (phoneNumber === "")
          throw new Error("El campo numero de telefono es requerido.");
        if (email === "")
          throw new Error("El campo correo electronico es requerido.");
        if (Object.keys(department).length <= 0)
          throw new Error("El campo departamento es requerido.");
        if (Object.keys(city).length <= 0)
          throw new Error("El campo cuidad es requerido.");
        if (firstAddress === "")
          throw new Error("El campo direccion 1 es requerido.");
        if (paymentMethod === "")
          throw new Error("No se ha seleccionado ningun metodo de pago.");
        if (Object.keys(cartItem).length <= 0)
          throw new Error("No existen productos en la canasta.");
      },
      onSubmit: () => {
        console.log(data);
      },
    });
  return (
    <form className={classes.checkout} onSubmit={handleSubmit}>
      <div className={classes["configuration-container"]}>
        <DeliveryForm updateForm={handleUpdateForm} />
        <PaymentOption updateForm={handleClearForm} />
      </div>
      <OrderSummary />
    </form>
  );
};

export default Checkout;
