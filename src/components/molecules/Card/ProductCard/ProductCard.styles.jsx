import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 330px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const ProductTitle = styled.span`
  font-family: "PTSans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #2c2c2c;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: auto;
  gap: 16px;
  padding: 16px;
`;

export const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  gap: 16px;
`;

export const PriceLabel = styled.span`
  font-family: "PT Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 41px;
  text-align: right;
  color: #2c2c2c;
`;
