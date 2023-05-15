export function getOptionFilter(inputValue) {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return function optionFilter(option) {
    return (
      !inputValue || option.value.toLowerCase().includes(lowerCasedInputValue)
    );
  };
}
