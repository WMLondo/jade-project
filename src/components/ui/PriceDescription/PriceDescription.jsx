import React from "react";
import {
  PriceContainer,
  PriceTitle,
  PriceValue,
} from "./PriceDescription.styles";

const PriceDescription = ({ title, description }) => {
  return (
    <PriceContainer>
      <PriceTitle>{title}</PriceTitle>
      <PriceValue>{description}</PriceValue>
    </PriceContainer>
  );
};

export default PriceDescription;
