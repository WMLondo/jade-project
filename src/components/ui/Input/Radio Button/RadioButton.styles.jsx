import styled from "styled-components";

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: "PT Sans", sans-serif;
  font-size: var(--font-size-m);
  line-height: 24px;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

export const RadioCheckmark = styled.span`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 0.5px solid var(--neutral-color-min-400);
  border-radius: 50%;
  background: var(--neutral-color-max);
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color-radial-gradient-500-to-400);
    opacity: 0;
  }

  ${RadioInput}:checked + &:before {
    opacity: 1;
  }
`;
