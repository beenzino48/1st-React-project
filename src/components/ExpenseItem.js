import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  // function for button click
  const clickHandler = () => {
    console.log("clicked!");
  };
  return (
    <div className="expense-item">
      {/* data comes from ExpenseDate.js */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* button changes the h2 title */}
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}

export default ExpenseItem;
