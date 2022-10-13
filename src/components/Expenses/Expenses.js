import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";
const Expenses = (props) => {
  // set the useState
  const [filteredYear, setFilteredYear] = useState("2020");
  // create the function for the dropdown list of filtered years
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // filteredExpenses is an array that takes props.item array, filters for dates
  // returns expense.date === to the original state filteredYear
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      {/* the values from the dropdown is handled by ExpensesFilter */}
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* passed through the expenses prop in ExpensesChart */}
      <ExpenseChart expenses={filteredExpenses} />
      {/* list of all expenses filtered by above function */}
      <ExpenseList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
