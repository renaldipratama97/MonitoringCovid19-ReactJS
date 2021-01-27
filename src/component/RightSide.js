import React from "react";
import { Doughnut } from "react-chartjs-2";

const RightSide = () => {
  const chart = {
    datasets: [
      {
        label: "Monitoring Covid - 19",
        data: [736460, 25987, 145482],
        backgroundColor: ["green", "red", "yellow"],
      },
    ],
    labels: ["Recovered", "Deaths", "Active"],
  };

  return (
    <div className="col-md-9">
      <div className="box-chart" style = {{ width: '700px', height: 'auto'}}>
        <Doughnut data={chart} />
      </div>
    </div>
  );
};

export default RightSide;
