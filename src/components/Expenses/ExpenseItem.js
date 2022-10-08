import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // set the useState for the button to change the title
  const [title, setTitle] = useState(props.title);

  // function for button click to change title
  const clickHandler = () => {
    setTitle("updated");
  };
  return (
    <div className="expense-item">
      {/* data comes from ExpenseDate.js */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* create button that changes the h2 title */}
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}

export default ExpenseItem;
