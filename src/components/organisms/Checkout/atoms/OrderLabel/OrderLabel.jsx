import React from "react";
import styled from "styled-components";

const Container = styled.div`
color:var(--neutral-color-max);
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.span`
  font-size: var(--font-size-s);
  font-weight: 400;
  font-family: "PTSans";
  text-align: left;
`;

const Price = styled.strong`
  font-size: j var(--font-size-s);
  font-weight: 700;
  font-family: "PTSans";
  text-align: right;
`;

const OrderLabel = ({ label, price }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Price>L. {price}</Price>
    </Container>
  );
};

export default OrderLabel;
