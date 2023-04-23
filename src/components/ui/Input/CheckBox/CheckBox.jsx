import {
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  CheckboxCheckmark,
} from "./CheckBox.styles";

const Checkbox = (props) => (
  <CheckboxContainer htmlFor={props.id}>
    <CheckboxInput id={props.id} {...props} />
    <CheckboxCheckmark />
    <CheckboxLabel>{props.label}</CheckboxLabel>
  </CheckboxContainer>
);

export default Checkbox;
