import React from "react";
import Label from "../../ui/Label/Label";
import ComboBox from "../../ui/Input/ComboBox/ComboBox";
import Checkbox from "../../ui/Input/CheckBox/CheckBox";
import RadioButton from "../../ui/Input/Radio Button/RadioButton";
import Field from "../../ui/Input/Field/Field";
import Button, { DangerButton } from "../../ui/Button/Button";

const ProductFilter = () => {
  return (
    <form>
      <h2>Filtro</h2>
      <div>
        <Label htmlFor="brand">Marca</Label>
        <ComboBox id="brand" />
      </div>
      <div>
        <Label htmlFor="ingredients">Preferencia de Ingredientes</Label>
        <ComboBox id="ingredients" />
      </div>
      <fieldset>
        <legend>Valoraciones</legend>
        <Checkbox label="4 o más estrellas" />
        <Checkbox label="3 o más estrellas" />
        <Checkbox label="2 o más estrellas" />
        <Checkbox label="1 o más estrellas" />
      </fieldset>
      <fieldset>
        <legend>Opciones de Entrega</legend>
        <Checkbox label="Pickup en Tienda" />
        <Checkbox label="Entrega a domicilio el mismo dia" />
        <Checkbox label="Entrega a domicilio gratis" />
      </fieldset>
      <fieldset>
        <legend>Rango de Precio</legend>
        <RadioButton id="">Debajo de L. 500.00</RadioButton>
        <RadioButton id="">Entre L. 500.00 y L. 1,000.00</RadioButton>
        <RadioButton id="">Entre L. 1,000.00 y L. 2,000.00</RadioButton>
        <RadioButton id="">Más de L. 2,000 L. 2,000.00</RadioButton>
        <RadioButton id="">
          <Field height="63px" width="86px">
            L. Minimo
          </Field>
          <Field height="63px" width="86px">
            L. Maximo
          </Field>
        </RadioButton>
      </fieldset>
      <div>
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
