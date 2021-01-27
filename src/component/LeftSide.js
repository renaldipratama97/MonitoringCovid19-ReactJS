import React from "react";
import "../assets/css/leftside.css";

function LeftSide({ data }) {
  return (
    <div className="col-md-3">
      <div className="box">
        <div className="little-box bg-light">
          <div className="confirmed-box">
            <p>Confirmed</p>
            <span>Total : {data.Confirmed} </span>
          </div>
        </div>

        <div className="little-box bg-light">
          <div className="confirmed-box">
            <p>Recovered</p>
            <span>Total : {data.Recovered} </span>
          </div>
        </div>

        <div className="little-box bg-light">
          <div className="confirmed-box">
            <p>Deaths</p>
            <span>Total : {data.Deaths}</span>
          </div>
        </div>

        <div className="little-box bg-light">
          <div className="confirmed-box">
            <p>Active</p>
            <span>Total : {data.Active}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
