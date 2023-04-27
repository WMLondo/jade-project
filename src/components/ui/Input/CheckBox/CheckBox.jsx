import useInput from "../../../../hooks/use-input";
import {
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  CheckboxCheckmark,
} from "./CheckBox.styles";

const Checkbox = (props) => {
  const { value, onChange } = useInput(props.value);

  return (
    <CheckboxContainer htmlFor={props.id}>
      <CheckboxInput id={props.id} value={value} onClick={onChange} />
      <CheckboxCheckmark />
      <CheckboxLabel>{props.label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
