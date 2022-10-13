import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  // set base of bar
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    // returns percentage this bar should be filled out of 100
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    // create all the bars
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          // takes logic from above to fill bars
          style={{ height: barFillHeight }}
        ></div>
      </div>
      {/* the bars are take the props data and are labeled from the chart.js data */}
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
