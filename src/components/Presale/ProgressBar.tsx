import React from "react";

// create component progress bar that take actual eth and total eth to rise as props

interface ProgressBarProps {
  actualEth: number;
  totalEth: number;
}

function ProgressBar({ actualEth, totalEth }: ProgressBarProps) {
  // create variable to calculate the percentage of eth raised
  const percentage = (actualEth / totalEth) * 100;

  // return the progress bar with the percentage of eth raised
  return (
    <div className="app-progress-bar">
      <div className="app-progress-bar-fill" style={{ width: `${percentage}%`, minWidth: "5%" }} />
    </div>
  );
}

export default ProgressBar;
