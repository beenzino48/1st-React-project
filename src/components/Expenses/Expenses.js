import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

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
      {/* if no expenses are found return <p> else return the array of expenses filtered to match the chosen year */}
      {filteredExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
