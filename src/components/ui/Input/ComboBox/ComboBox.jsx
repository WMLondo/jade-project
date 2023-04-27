import React, { useEffect, useState } from "react";

import {
  ComboBoxContainer,
  Option,
  SelectInput,
  DropdownIcon,
} from "./ComboBox.styles";

import { FaChevronDown } from "react-icons/fa";

const ComboBox = React.forwardRef(
  ({ onChange, onBlur, name, options, width, height }, ref) => {
    return (
      <ComboBoxContainer>
        <SelectInput
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

export default ComboBox;
