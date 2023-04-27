import React, { useEffect, useState } from "react";
import FilterContainer from "../FilterContainer/FilterContainer";
import Label from "../../../ui/Label/Label";
import ComboBox from "../../../ui/Input/ComboBox/ComboBox";

const ProductFilterBrand = ({ items, onChange }) => {
  const [brandOptions, setBrandOptions] = useState([
    { label: "Seleccionar Marca", value: "", isDefault: true },
  ]);

  const handleChange = (value) => {
    onChange(value);
  };

  useEffect(() => {
    items.forEach((item) => {
      setBrandOptions([
        ...brandOptions,
        {
          label: item.product.productBrand,
          value: item.product.productBrand.toLowerCase(),
        },
      ]);
    });
  }, []);

  return (
    <FilterContainer>
      <Label htmlFor="brand" style={{ color: "var(--neutral-color-max)" }}>
        Marca
      </Label>
      <ComboBox id="brand" options={brandOptions} onChange={handlerChange} />
    </FilterContainer>
  );
};

export default ProductFilterBrand;
