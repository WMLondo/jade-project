import React from "react";
import { hondurasDepartments } from "../../../data/hondurasDepartments";
import { hondurasCities } from "../../../data/hondurasCities";
import CheckoutComboBox from "../CheckoutComboBox/CheckoutComboBox";
import CheckoutField from "../CheckoutField/CheckoutField";
import classes from "./DeliveryForm.module.css";
import FormCard from "../FormCard/FormCard";

const DeliveryForm = ({ register, errors, watch }) => {
  let cities = hondurasCities.default;

  if (watch("department")) {
    cities = hondurasCities[watch("department")];
  }
  return (
    <FormCard title="Informacion de Envio">
      <div className={classes.row}>
        <CheckoutField
          w="312px"
          h="43px"
          id="name"
          label="Nombre"
          placeholder="Nombre Apellido"
          type="text"
          register={{ ...register("name") }}
          errorMessage={errors.name?.message}
        />
        <CheckoutField
          w="312px"
          h="43px"
          id="phoneNumber"
          label="Numero de Telefono"
          placeholder="+504 1234-5678"
          type="text"
          register={{ ...register("phoneNumber") }}
          errorMessage={errors.phoneNumber?.message}
        />
      </div>
      <div className={classes.row}>
        <CheckoutField
          w="312px"
          h="43px"
          id="phone"
          label="Correo electronico"
          placeholder="tunombretyapellido@ejemplo.com"
          type="email"
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />
        <CheckoutComboBox
          w="312px"
          h="43px"
          id="department"
          label="Departamento"
          data={hondurasDepartments}
          register={{ ...register("department") }}
          errorMessage={errors.department?.message}
        />
      </div>
      <CheckoutComboBox
        w="312px"
        h="43px"
        id="city"
        label="Cuidad"
        data={cities}
        register={{ ...register("city") }}
        errorMessage={errors.city?.message}
      />
      <CheckoutField
        w="calc( 696px - 32px)"
        h="43px"
        id="firstAddress"
        label="Direccion 1"
        placeholder="Calle 8 Avenida 10"
        type="text"
        register={{ ...register("firstAddress") }}
        errorMessage={errors.firstAddress?.message}
      />
      <CheckoutField
        w="calc( 696px - 32px)"
        h="43px"
        id="address_2"
        label="Direccion 2 (opcional)"
        placeholder="ref Pulperia Nombre"
        type="text"
        register={{ ...register("secondAddress") }}
        errorMessage={errors.secondAddress?.message}
      />
    </FormCard>
  );
};

export default DeliveryForm;
