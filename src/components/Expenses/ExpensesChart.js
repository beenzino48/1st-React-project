import React from "react";

import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  // object of values making up the chart
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  // for each expense expenseMonth should be used as chartDataPoints
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    // each month's value is the sum of all expenses in that month
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  // return chart with dataPoints set in Chart.js and chartDataPoints from the above object
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
