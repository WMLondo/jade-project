import React, { useRef } from "react";

import {
  ComboBoxContainer,
  Option,
  SelectInput,
  DropdownIcon,
} from "./ComboBox.styles";

import { FaChevronDown } from "react-icons/fa";

const ComboBox = ({ onChange, options, width, height }) => {
  const comboBoxRef = useRef();

  const handlerOnChange = () => {
    onChange(comboBoxRef.current.value);
  };
  return (
    <ComboBoxContainer>
      <SelectInput
        width={width}
        height={height}
        ref={comboBoxRef}
        onChange={handlerOnChange}
      >
        {options &&
          options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
      </SelectInput>
      <DropdownIcon>
        <FaChevronDown style={{ color: "var(--neutral-color-min-100)" }} />
      </DropdownIcon>
    </ComboBoxContainer>
  );
};

export default ComboBox;

export const ComboBoxForm = React.forwardRef(
  ({ onChange, onBlur, name, options, width, height, id }, ref) => {
    return (
      <ComboBoxContainer>
        <SelectInput
          id={id}
          width={width}
          height={height}
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        >
          {options &&
            options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
        </SelectInput>
        <DropdownIcon>
          <FaChevronDown style={{ color: "var(--neutral-color-min-100)" }} />
        </DropdownIcon>
      </ComboBoxContainer>
    );
  }
);
