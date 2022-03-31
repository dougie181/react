import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  } else {
    return (
        <ul className="expenses-list">
          {props.items.map((item) => (
            <ExpenseItem
              key={item.id}
              date={item.date}
              amount={item.amount}
              title={item.title}
            />
          ))}
        </ul>
    );
  }
};

export default ExpensesList;
