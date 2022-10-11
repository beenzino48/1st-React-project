import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// This gets users input from ExpenseForm  title, amount and date
const NewExpense = (props) => {
  // this function takes the expenseData object
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // pull key value pairs from expenseData in ExpenseForm
      ...enteredExpenseData,
      // set a random ID
      id: Math.random().toString(),
    };
    // allows the result to be seen in app.js
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* Getting data from expenseForm */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
