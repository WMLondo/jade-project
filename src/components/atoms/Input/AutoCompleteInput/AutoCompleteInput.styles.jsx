import styled from "styled-components";
import { OptionsContainer, Option, OptionTitle } from "../Select/Select.styles";

export const AutoCompleteInputContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-self: center;
  position: relative;
  cursor: pointer;
  gap: 8px;
`;

export const AutoCompleteInputSelectedOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.w || "261px"};
  height: ${(props) => props.h || "43px"};
  padding: 8px;
  background: #ffffff;
  border: 1px solid var(---neutral-color-min-300);
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => (props.$isHidden ? "5px" : "5px 5px 0px 0px")};
  position: relative;

  &:hover {
    border: 1px solid var(--primary-color-500);
    box-shadow: inset 0px 0px 10px rgba(16, 162, 82, 0.25);
  }
`;

export const AutoCompleteTextbox = styled.input.attrs({
  type: "text",
})`
  height: calc(100% - 16px);
  text-align: ${(props) => props.textAlign || "left"};
  font-size: var(--font-size-m);
  color: var(--neutral-color-min-100);
  background: var(--neutral-color-max);
  font-weight: 400;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 8px;
`;

export const AutoCompleteButton = styled.button`
  height: 100%;
  width: 43px;
  background-color: red;
  border: none;
  border-left: 1px solid var(--neutral-color-min-300);
  background-color: transparent;
  cursor: pointer;
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: var(--neutral-color-min-100);
  padding-left: 8px;
  transition: transform 0.2s linear;
  transform: ${(props) => (props.$isHidden ? "" : "rotateX(180deg)")};
`;
export const AutoCompleteOptionsContainer = styled(OptionsContainer)``;

export const AutoCompleteOption = styled(Option)`
  width: 100%;
`;

export const AutoCompleteOptionTitle = styled(OptionTitle)``;
