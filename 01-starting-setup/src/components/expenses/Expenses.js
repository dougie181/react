import React, { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState("2021");

  const filterByYearHandler = (filterYear) => {
    setFilteredYear((prevYear) => {
      return [filterYear];
    });
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filterYear.toString()
  );

  const barValues = filteredExpenses.map((item) => {
    let month = item.date.month;
    return 0;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterYearChange={filterByYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
