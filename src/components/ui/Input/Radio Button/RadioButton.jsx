import {
  RadioContainer,
  RadioInput,
  RadioCheckmark,
} from "./RadioButton.styles";

const RadioButton = (props) => {
  return (
    <RadioContainer htmlFor={props.id}>
      <RadioInput id={props.id} {...props} />
      <RadioCheckmark />
      {props.children}
    </RadioContainer>
  );
};

export default RadioButton;
