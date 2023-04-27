import {
  RadioContainer,
  RadioInput,
  RadioCheckmark,
  RadioButtonLabel,
} from "./RadioButton.styles";

const RadioButton = (props) => {
  return (
    <RadioContainer htmlFor={props.id}>
      <RadioInput id={props.id} value={props.value} {...props} />
      <RadioCheckmark />
      <RadioButtonLabel>{props.label}</RadioButtonLabel>
    </RadioContainer>
  );
};

export default RadioButton;
