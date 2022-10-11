import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // Set the useState so that you can add a new expense to the array of expenses
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // create the function which changes the old state to the new useState
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* Gets users input, returns user's expense data */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* items(expenses) is the array of expenses created in expenses.js */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
