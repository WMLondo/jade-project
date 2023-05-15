import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.w || "auto"};
  height: ${(props) => props.h || "auto"};
  padding: 14px 28px;
  font-size: ${(props) => props.fs || "var(--font-size-m)"};
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
  :hover {
    background: var(--primary-color-300);
  }
  :active {
    background: var(--primary-color);
  }
  :disabled {
    background: var(--primary-color-disabled);
    cursor: initial;
  }
`;
