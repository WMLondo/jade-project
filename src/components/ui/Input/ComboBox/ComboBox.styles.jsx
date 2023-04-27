import styled from "styled-components";

export const ComboBoxContainer = styled.div`
  position: relative;
`;

export const SelectInput = styled.select`
  width: ${(props) => props.width || "261px"};
  height: ${(props) => props.height || "auto"};
  line-height: 27px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border: 1px solid var(--neutral-color-min-300);
  background-color: var(--neutral-color-max);

  border-radius: 5px;
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.25);
  appearance: none;
  outline: none;
  cursor: pointer;
  overflow-x: hidden;
`;

export const Option = styled.option`
  width: 261px;
  height: 52px;
  padding: 8px;
`;

export const DropdownIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: calc(100% - 16px);
  width: 32px;
  margin: 8px;
  border-left: 1 solid var(--neutral-color-min-300);
  pointer-events: none;
  transition: transform 0.3s ease;
  transform: ${(props) => props.isOpen && "rotate(180deg)"};
`;
