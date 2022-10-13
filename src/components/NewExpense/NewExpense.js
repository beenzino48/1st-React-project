import React, { useState } from "react";

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
  // set the state for the button to false
  const [isEditing, setIsEditing] = useState(false);
  // button changes to true to show the expense form
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  // button changes to false to remove the expense form
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* clicking button opens expense form*/}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add Expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          // pointer to use the function in the ExpenseForm.js on cancel button
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
