import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// This gets users input
const NewExpense = () => {
  return (
    <div className="new-expense">
      <form>
        <ExpenseForm></ExpenseForm>
      </form>
    </div>
  );
};

export default NewExpense;
