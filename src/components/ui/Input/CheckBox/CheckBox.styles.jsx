import styled from "styled-components";

export const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckboxCheckmark = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 0.5px solid #787878;
  background: #ffffff;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background: var(--primary-color-radial-gradient-500-to-400);
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  ${CheckboxInput}:checked + &:after {
    opacity: 1;
  }
`;

export const CheckboxLabel = styled.span`
  font-family: "PTSans";
  font-style: normal;
  font-weight: 400;
  font-size: var(--font-size-m);
  line-height: 24px;
`;
