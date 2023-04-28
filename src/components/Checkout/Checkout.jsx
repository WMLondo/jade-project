import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classes from "./Checkout.module.css";
import { hondurasDepartments } from "../../data/hondurasDepartments";
import { hondurasCities } from "../../data/hondurasCities";
import * as yup from "yup";
import DeliveryForm from "./DeliveryForm/DeliveryForm";
import OrderSummary from "./OrderSummary/OrderSummary";
import PaymentOption from "./PaymentOption/PaymentOption";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { httpSetData } from "../../utils/httpFirebase";
import { useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/cartSlice";

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
  city: yup.string().required("La cuidad es un campo requerido."),
  firstAddress: yup.string().required("La direccion es un campo obligatorio"),
  payment: yup.string().required("Debes seleccionar un metodo de pago."),
});

const paymentOptions = {
  OnlinePayment: "online-payment",
  CashPayment: "cash-payment",
  PosPayment: "pos-payment",
};

const Checkout = () => {
  const { isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    setValue("date", new Date());
    setValue("status", "confirmed");
    const status = httpSetData("orders", data);
    const paymentMethod = watch("payment");
    if (status) {
      reset();
      dispatch(resetCart());
    }

    if (paymentMethod === paymentOptions.OnlinePayment) {
      setTimeout(() => {
        setIsLoading(false);
        navigate("/pay");
      }, 3000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        navigate("/confirmation");
      }, 3000);
    }
  };

  const onError = (error) => {
    console.log("Something goes wrong.", error);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setValue("name", user.name);
      setValue("email", user.email);
    }
  }, [isAuthenticated]);

  return (
    <form
      className={classes.checkout}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className={classes["configuration-container"]}>
        <DeliveryForm
          register={register}
          hondurasDepartments={hondurasDepartments}
          watch={watch}
          errors={errors}
        />
        <PaymentOption register={register} errors={errors} />
      </div>

      <OrderSummary
        loading={isLoading}
        setValue={setValue}
        delivery={
          watch("department") &&
          watch("city") &&
          hondurasCities[watch("department")].find(
            (city) => city.value === watch("city")
          )?.delivery
        }
      />
    </form>
  );
};

export default Checkout;
