import { useSelect } from "downshift";

import { FaChevronDown } from "react-icons/fa";

import {
  SelectContainer,
  SelectedOptionContainer,
  SelectedValue,
  IconContainer,
  Icon,
  OptionsContainer,
  Option,
  OptionTitle,
} from "./Select.styles";

const Select = ({ placeHolder, selectOptions }) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: selectOptions,
  });

  return (
    <SelectContainer>
      <SelectedOptionContainer {...getToggleButtonProps()}>
        <SelectedValue>
          {selectedItem ? selectedItem.title : placeHolder}
        </SelectedValue>
        <IconContainer>
          <Icon $isHidden={!isOpen}>
            <FaChevronDown />
          </Icon>
        </IconContainer>
      </SelectedOptionContainer>
      <OptionsContainer $isHidden={!isOpen} {...getMenuProps()}>
        {isOpen &&
          selectOptions.map((item, index) => (
            <Option
              key={`${item.value}${index}`}
              $isFocus={highlightedIndex === index}
              {...getItemProps({ item, index })}
            >
              <OptionTitle>{item.title}</OptionTitle>
            </Option>
          ))}
      </OptionsContainer>
    </SelectContainer>
  );
};

export default Select;
