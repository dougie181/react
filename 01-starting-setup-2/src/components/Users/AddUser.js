import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isValidUser, setValidUser] = useState(true);
  const [errorReason, setErrorReason] = useState(null);

  const onNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const onErrorHandler = (event) => {
    event.preventDefault();
    setErrorReason(null);
    setValidUser(true);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userName === "") {
      setValidUser(false);
      setErrorReason({
        title: "Invalid User name",
        message: "Please enter a valid user name",
      });
      return;
    }

    if (parseInt(userAge) < 1) {
      setValidUser(false);
      setErrorReason({
        title: "Invalid User age",
        message: "Please enter a valid user age",
      });
      return;
    }

    const newUserData = {
      id: Math.random().toString(),
      name: userName,
      age: userAge,
    };

    //console.log(newUserData);
    props.onNewUser(newUserData);

    setUserAge("");
    setUserName("");
  };

  return (
    <Wrapper>
      {!isValidUser && (
        <ErrorModal
          onConfirm={onErrorHandler}
          message={errorReason.message}
          title={errorReason.title}
          type="warning"
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={onNameChangeHandler}
              ></input>
            </div>
            <div>
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                type="number"
                value={userAge}
                onChange={onAgeChangeHandler}
              ></input>
            </div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
