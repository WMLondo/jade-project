import React, { useEffect, useState } from "react";
import Checkbox from "../../ui/Input/CheckBox/CheckBox";
import RadioButton from "../../ui/Input/Radio Button/RadioButton";
import Button, { DangerButton } from "../../ui/Button/Button";
import classes from "./ProductFilter.module.css";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductFilterBrand from "./ProductFilterBrand/ProductFilterBrand";

const ProductFilter = () => {
  const [formValues, setFormValues] = useState({});
  const [searchParams] = useSearchParams();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes["filter-container"]} onSubmit={submitHandler}>
      <h2 className={classes.title}>Filtros</h2>
      <ProductFilterBrand />
      <div className={classes["filter-option-container"]}>
        <legend className={classes.label}>Opciones de Entrega</legend>
        <Checkbox label="Pickup en Tienda" />
        <Checkbox label="Entrega a domicilio el mismo dia" />
        <Checkbox label="Entrega a domicilio gratis" />
      </div>
      <div className={classes["filter-option-container"]}>
        <legend className={classes.label}>Rango de Precio</legend>
        <RadioButton id="" label="Debajo de L. 500.00" />
        <RadioButton id="" label="Entre L. 500.00 y L. 1,000.00" />
        <RadioButton id="" label="Entre L. 1,000.00 y L. 2,000.00" />
        <RadioButton id="" label="Más de L. 2,000.00" />
      </div>
      <div className={classes["action-container"]}>
        <DangerButton width="173px" height="37">
          BORRAR FILTROS
        </DangerButton>
        <Button width="114px" height="37px">
          APLICAR
        </Button>
      </div>
    </form>
  );
};

export default ProductFilter;
