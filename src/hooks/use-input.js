import { useId, useState } from "react";

function useInput(inputObj) {
  const { initialValue, validators, updateFormValue } = inputObj;
  const id = useId();
  const [value, setValue] = useState(initialValue);
  const [errors, setErrors] = useState([]);
  const [touched, setTouched] = useState(false);
  const hasError = touched && errors.length > 0;

  function handleChange(event) {
    const newErrors = validators
      .map((validator) => validator(event.target.value))
      .filter((error) => error !== false && error !== null);
    setValue(event.target.value);
    setErrors(newErrors);
    if (updateFormValue && !hasError) {
      updateFormValue(event);
    }
  }

  function handleBlur(event) {
    const newErrors = validators
      .map((validator) => validator(event.target.value))
      .filter((error) => error !== false && error !== null);
    setErrors(newErrors);
    setTouched(true);
  }

  const reset = () => {
    setValue(initialValue);
  };

  return {
    id,
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    errorMessage: errors[0],
    hasError,
    resetInput: reset,
  };
}

export default useInput;
