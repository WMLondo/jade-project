import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  text-decoration: none;
  color: var(--neutral-color-min);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  background-color: var(--neutral-color-max);
  border: none;
  &:hover {
    text-decoration: underline;
    color: var(--primary-color-300);
  }
  &:active {
    color: var(--primary-color-500);
  }
`;
