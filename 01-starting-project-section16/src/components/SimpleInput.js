import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const checkField = (type, value) => {
    if (type === "NAME") {
      return value.trim() !== "";
    }
    if (type === "EMAIL") {
      return value.includes("@");
    }
    return false;
  };
 
  const {
    isInvalid: nameInputIsInvalid,
    hasError: nameHasError,
    value: enteredName,
    onBlur: onNameBlurHandler,
    onChange: nameInputChangeHandler,
    clear: clearNameField,
    class: nameClass,
  } = useInput((value) => checkField("NAME", value));

  const {
    isInvalid: emailInputIsInvalid,
    hasError: emailHasError,
    value: enteredEmail,
    onBlur: onEmailBlurHandler,
    onChange: emailInputChangeHandler,
    clear: clearEmailField,
    class: emailInputClasses,
  } = useInput((value) => checkField("EMAIL", value));

  const clearForm = () => {
    clearNameField();
    clearEmailField();
  }

  let formIsValid = false;

  if (!nameInputIsInvalid && true) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (nameInputIsInvalid || emailInputIsInvalid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);

    clearForm();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={onNameBlurHandler}
          value={enteredName}
        />
        {nameHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={onEmailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Email is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
