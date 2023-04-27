import styled from "styled-components";

const handleValidationState = (isValid) => {
  switch (isValid) {
    case true:
      return `
      border: 1px solid var(--primary-color);
      box-shadow: inset 0px 0px 10px rgba(16, 162, 106, 0.25);
      `;
    case false:
      return `border: 1px solid var(--danger-color);
        box-shadow: inset 0px 0px 10px rgba(162, 16, 16, 0.25);
        color: var(--danger-color)`;
    default:
      return `border: 1px solid var(--neutral-color-min-300)
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);`;
  }
};

export const Field = styled.input`
  width: ${(props) => props.width || "261px"};
  height: ${(props) => props.height || "43px"};
  text-align: ${(props) => props.textAlign || "left"};
  font-size: var(--font-size-m);
  color: var(--neutral-color-min-100);
  background: var(--neutral-color-max);
  padding: 0px 8px;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid var(--neutral-color-min-400);
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
  ${(props) => handleValidationState(props.isValid)}
  &:hover:enabled {
    border: 1px solid var(--primary-color-500);
    box-shadow: inset 0px 0px 10px rgba(16, 162, 82, 0.25);
  }
  &:focus {
    outline: none;
    border: 1px solid var(--primary-color-300);
    box-shadow: inset 0px 0px 10px rgba(16, 162, 106, 0.25);
  }
  &:disabled,
  input[disabled] {
    background-color: var(--neutral-color-max-50);
    &hover {
      border: 1px solid var(--neutral-color-min-300);
      box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
    }
  }
`;
