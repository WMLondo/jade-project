import React from "react";
import Downshift from "downshift";
import { FaChevronDown } from "react-icons/fa";
import {
  AutoCompleteInputContainer,
  AutoCompleteInputSelectedOption,
  AutoCompleteOptionsContainer,
  AutoCompleteTextbox,
  AutoCompleteOption,
  AutoCompleteButton,
  Icon,
  AutoCompleteOptionTitle,
} from "./AutoCompleteInput.styles";

const AutoCompleteInput = ({
  id,
  name,
  width,
  height,
  options,
  placeholder,
  onBlur,
  onChange,
}) => {
  return (
    <Downshift
      onChange={(selected) => {
        onChange({ target: { name, value: selected } });
      }}
      inputId={id}
      itemToString={(item) => (item ? item.title : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        inputValue,
        highlightedIndex,
        getRootProps,
      }) => (
        <AutoCompleteInputContainer>
          <AutoCompleteInputSelectedOption
            w={width}
            h={height}
            $isHidden={!isOpen}
            {...getRootProps({}, { suppressRefError: true })}
          >
            <AutoCompleteTextbox
              placeholder={placeholder}
              {...getInputProps({ onBlur: onBlur })}
            />
            <AutoCompleteButton
              aria-label="toggle menu"
              className="px-2"
              type="button"
              {...getToggleButtonProps()}
            >
              <Icon $isHidden={!isOpen}>
                <FaChevronDown />
              </Icon>
            </AutoCompleteButton>
          </AutoCompleteInputSelectedOption>
          <AutoCompleteOptionsContainer
            $isHidden={!isOpen}
            h={height}
            {...getMenuProps()}
          >
            {isOpen &&
              options
                .filter(
                  (item) =>
                    !inputValue ||
                    item.title.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <AutoCompleteOption
                    $isFocus={highlightedIndex === index}
                    key={`${item}_${index}`}
                    {...getItemProps({ item, index })}
                  >
                    <AutoCompleteOptionTitle>
                      {item.title}
                    </AutoCompleteOptionTitle>
                  </AutoCompleteOption>
                ))}
          </AutoCompleteOptionsContainer>
        </AutoCompleteInputContainer>
      )}
    </Downshift>
  );
};

export default AutoCompleteInput;
