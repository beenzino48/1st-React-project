import React, { UserState, useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // State set for user's input change
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // Uses an object to set all three states in one const
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  // set function to get user's input
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // This approach guarantees that you will receive the latest state each time
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* Added listener for users input */}
          <input type="text" on onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="date" min="2019-01-01" max="2022-12-31"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
