import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  height: 116px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const ItemTitle = styled.span`
  font-size: var(--font-size-m);
  font-weight: 700;
  width: 140px;
`;

export const ItemVariant = styled.span`
  font-size: 13px;
  color: var(--neutral-color-min-300);
  font-weight: 400;
`;

export const DeleteItemOption = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  width: 147px;
  background-color: var(--neutral-color-max);
  border: none;
  color: var(--danger-color-500);
  &:hover {
    color: var(--danger-color);
  }
  &:active {
    color: var(--danger-color-600);
  }
`;

export const FlexColumn = styled.div`
  width: 173px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
  justify-content: center;
  margin-left: auto;
`;

export const TotalPrice = styled.span`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 23px;
  text-align: right;
  color: var(--neutral-color-min-100);
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CartItemButton = styled.button`
  padding: 14px 28px;
  font-size: var(--font-size-m);
  font-weight: 700;
  font-family: "PTSans", sans-serif;
  color: var(--neutral-color-max);
  background: var(--primary-color-linear-gradient-300-to-400-transform-180);
  box-shadow: 0px 0px 10px rgba(16, 163, 90, 0.5);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 35px;
  &:hover {
    background: var(--primary-color-300);
  }
  &:active {
    background: var(--primary-color);
  }
`;
