import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

// component used in App.js to hold expenses
const ExpenseList = (props) => {
  // if no expenses return h2 message
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  // else return a new array with data collected from the ExpenseForm
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
