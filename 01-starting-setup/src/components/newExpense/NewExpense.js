import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setEnableForm] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    props.onAddExpense(expenseData);
    setEnableForm(false);
  };

  const showFormHandler = (event) => {
    setEnableForm(true);
  };

  const closeFormHandler = () => {
    setEnableForm(false);
  }

  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeFormHandler} />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={showFormHandler}>Add New Expense</button>
      </div>
    );    
  }
};

export default NewExpense;
