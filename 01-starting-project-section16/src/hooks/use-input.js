import { useState } from "react";

const useInput = (checkInputRule) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredInputTouched, setEnteredInputTouched] = useState(false);

  const enteredInputIsValid = checkInputRule(enteredInput);
  const inputIsInvalid = !enteredInputIsValid && enteredInputTouched;
//   console.log("inputIsInvalid     : " + inputIsInvalid);
//   console.log('enteredInputIsValid: ' +enteredInputIsValid);

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const onBlurHandler = (event) => {
    setEnteredInputTouched(true);
  };

  const clearInputField = () => {
    setEnteredInput("");
    setEnteredInputTouched(false);
  };

  const inputClass = inputIsInvalid ? "form-control invalid" : "form-control";

  return {
    isInvalid: !enteredInputIsValid,
    hasError: inputIsInvalid,
    value: enteredInput,
    onBlur: onBlurHandler,
    onChange: inputChangeHandler,
    clear: clearInputField,
    class: inputClass,
  };
};

export default useInput;
