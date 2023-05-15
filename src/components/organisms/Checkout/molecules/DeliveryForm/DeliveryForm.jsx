import React from "react";
import { hondurasDepartments } from "../../../../../data/hondurasDepartments";
import { hondurasCities } from "../../../../../data/hondurasCities";
import ComboBox from "../../atoms/ComboBox/Combobox";
import FieldWithLabel from "../../atoms/FieldWitLabel/FieldWitLabel";
import classes from "./DeliveryForm.module.css";
import FormCard from "../FormCard/FormCard";
import useInput from "../../../../../hooks/use-input";
import Label from "../../../../atoms/Label/Label";
import AutoCompleteInput from "../../../../atoms/Input/AutoCompleteInput/AutoCompleteInput";
import ErrorMessage from "../../../../atoms/Input/ErrorMessage/ErrorMessage";

const DeliveryForm = ({ updateForm }) => {
  const name = useInput({
    initialValue: "",
    validators: [
      (value) => value === "" && "El campo de nombre no debe estar vacío.",
    ],
    updateFormValue: updateForm,
  });

  const phoneNumber = useInput({
    initialValue: "",
    validators: [
      (value) =>
        value === "" && "El campo de número de teléfono no debe estar vacío.",
      (value) => {
        const regex = /^(?:\+504\s?)?(?:\d{4}[\s-]?\d{4}|\d{8})$/;

        return (
          !regex.test(value) &&
          "El formato del número de teléfono ingresado no es válido."
        );
      },
    ],
    updateFormValue: updateForm,
  });

  const email = useInput({
    initialValue: "",
    validators: [
      (value) =>
        value === "" && "El campo de correo electrónico no debe estar vacío.",
      (value) =>
        !value.includes("@") &&
        !value.includes(".") &&
        "El correo electrónico ingresado no es un correo electrónico válido.",
    ],
    updateFormValue: updateForm,
  });

  const department = useInput({
    initialValue: {},
    validators: [
      (value) =>
        Object.keys(value).length <= 0 &&
        "El campo de departamento no debe estar vacio.",
    ],
    updateFormValue: updateForm,
  });

  const city = useInput({
    initialValue: {},
    validators: [
      (value) =>
        Object.keys(value).length <= 0 &&
        "El campo de direccion no debe estar vacio.",
    ],
    updateFormValue: updateForm,
  });

  const firstAddress = useInput({
    initialValue: "",
    validators: [
      (value) => value === "" && "El campo de nombre no debe estar vacío.",
    ],
    updateFormValue: updateForm,
  });

  const secondAddress = useInput({
    initialValue: "",
    validators: [],
    updateFormValue: updateForm,
  });

  return (
    <FormCard title="Informacion de Envio">
      <div className={classes.row}>
        <FieldWithLabel
          w="312px"
          id={name.id}
          name="name"
          label="Nombre"
          placeholder="Nombre Apellido"
          type="text"
          {...name}
        />
        <FieldWithLabel
          w="312px"
          id={phoneNumber.id}
          name="phoneNumber"
          label="Numero de Telefono"
          placeholder="+504 1234-5678"
          type="text"
          {...phoneNumber}
        />
      </div>
      <div className={classes.row}>
        <FieldWithLabel
          w="312px"
          id={email.id}
          name="email"
          label="Correo electronico"
          placeholder="tunombretyapellido@ejemplo.com"
          type="email"
          {...email}
        />
        <ComboBox>
          <Label htmlFor={department.id}>Departamento:</Label>
          <AutoCompleteInput
            name="department"
            id={department.id}
            width="312px"
            height="26px"
            options={hondurasDepartments}
            placeholder="Escribe tu departamento"
            {...department}
          />
          {department.hasError && (
            <ErrorMessage>{department.errorMessage}</ErrorMessage>
          )}
        </ComboBox>
      </div>
      <ComboBox>
        <Label htmlFor={city.id}>Cuidad:</Label>
        <AutoCompleteInput
          id={city.id}
          width="312px"
          height="26px"
          name="city"
          options={hondurasCities[department?.value?.value] || []}
          placeholder="Escribe tu cuidad"
          {...city}
        />
        {city.hasError && <ErrorMessage>{city.errorMessage}</ErrorMessage>}
      </ComboBox>
      <FieldWithLabel
        w="calc( 696px - 32px)"
        h="43px"
        id={firstAddress.id}
        name="firstAddress"
        label="Direccion 1"
        placeholder="Calle 8 Avenida 10"
        type="text"
        {...firstAddress}
      />
      <FieldWithLabel
        w="calc( 696px - 32px)"
        h="43px"
        id={secondAddress.id}
        name="secondAddress"
        label="Direccion 2 (opcional)"
        placeholder="ref Pulperia Nombre"
        type="text"
        {...secondAddress}
      />
    </FormCard>
  );
};

export default DeliveryForm;
