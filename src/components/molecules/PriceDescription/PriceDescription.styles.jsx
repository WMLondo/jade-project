import styled from "styled-components";

export const PriceContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;
  flex-direction: row;
  gap: 8px;
`;

export const PriceTitle = styled.span`
  font-size: 13px;
  color: var(--neutral-color-min-100);
  font-weight: 400;
`;

export const PriceValue = styled.strong`
  font-size: 13px;
  color: var(--neutral-color-min-100);
  font-weight: 700;
`;
