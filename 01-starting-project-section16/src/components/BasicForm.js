import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    isInvalid: fNameIsInvalid,
    hasError: fNameHasError,
    value: fName,
    onBlur: fNameBlurHandler,
    onChange: fNameChangeHandler,
    clear: clearfName,
    class: fNameClass,
  } = useInput(isNotEmpty);

  const {
    isInvalid: lNameIsInvalid,
    hasError: lNameHasError,
    value: lName,
    onBlur: lNameBlurHandler,
    onChange: lNameChangeHandler,
    clear: clearlName,
    class: lNameClass,
  } = useInput(isNotEmpty);

  const {
    isInvalid: eMailIsInvalid,
    hasError: eMailHasError,
    value: eMail,
    onBlur: eMailBlurHandler,
    onChange: eMailChangeHandler,
    clear: cleareMail,
    class: eMailClass,
  } = useInput(isEmail);

  let formIsValid = false;
  

  if (fNameIsInvalid || lNameIsInvalid || eMailIsInvalid) {
    formIsValid = false;
  } else {
    formIsValid = true;
  }

  const formSubmitHander = (event) => {
    event.preventDefault();
    console.log(formIsValid);
    if (!formIsValid) {
      return;
    }

    console.log("Submitted");
    console.log("First Name: " + fName);
    console.log("Last Name: " + lName);
    console.log("E-Mail: " + eMail);

    clearfName();
    clearlName();
    cleareMail();
  };

  return (
    <form onSubmit={formSubmitHander}>
      <div className="control-group">
        <div className={fNameClass}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={fName}
            onBlur={fNameBlurHandler}
            onChange={fNameChangeHandler}
          />
          {fNameHasError && (
            <div className="error-text">First name is not valid</div>
          )}
        </div>
        <div className={lNameClass}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lName}
            onBlur={lNameBlurHandler}
            onChange={lNameChangeHandler}
          />
          {lNameHasError && (
            <div className="error-text">Last name is not valid</div>
          )}
        </div>
      </div>
      <div className={eMailClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={eMail}
          onBlur={eMailBlurHandler}
          onChange={eMailChangeHandler}
        />
        {eMailHasError&& (
          <div className="error-text">E-Mail is not valid</div>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
