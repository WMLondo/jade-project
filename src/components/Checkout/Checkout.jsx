import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classes from "./Checkout.module.css";
import { hondurasDepartments } from "../../data/hondurasDepartments";
import * as yup from "yup";
import DeliveryForm from "./DeliveryForm/DeliveryForm";
import OrderSummary from "./OrderSummary/OrderSummary";

const schema = yup.object({
  name: yup.string().required("El nombre es un campo requerido."),
  phoneNumber: yup
    .string()
    .length(8, "El numero de telefono debe de ser de 8 digitos.")
    .required("El numero de telefono es un campo requerido."),
  email: yup
    .string()
    .required("El correo electronico es un campo requerido.")
    .email("El correo electronico no es valido."),
  department: yup.string().required("El departamento es un campo requerido."),
  cities: yup.string().required("La cuidad es un campo requerido."),
  firstAddress: yup.string().required("La direccion es un campo obligatorio"),
});

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={classes.checkout} onSubmit={handleSubmit(onSubmit)}>
      <DeliveryForm
        register={register}
        hondurasDepartments={hondurasDepartments}
        watch={watch}
        errors={errors}
      />
      <OrderSummary />
    </form>
  );
};

export default Checkout;
